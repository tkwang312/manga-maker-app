from auth_token import HUGGINGFACE_TOKEN as token
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import torch
from torch import autocast
from diffusers import StableDiffusionPipeline
from io import BytesIO
import base64
import platform

print(platform.platform())
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows all origins
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods
    allow_headers=["*"], # Allows all headers
)

device = "cuda"
model_id = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(model_id, variant="fp16", torch_dtype=torch.float16, token=token)
pipe.to(device)

@app.get("/")
def generate(prompt: str): 
    with autocast(device): 
        image = pipe(prompt, guidance_scale=8.5).images[0]

    image.save("testimage.png")

    buffer = BytesIO()
    image.save(buffer, format="PNG")
    imgstr = base64.b64encode(buffer.getvalue())

    return Response(content=imgstr, media_type="image/png")