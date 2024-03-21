from auth_token import HUGGINGFACE_TOKEN as token
from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
import torch
from torch import autocast
from diffusers import StableDiffusionPipeline
from transformers import CLIPTextModel, CLIPTokenizer
from io import BytesIO
import base64
import platform
from PIL.Image import Image

print(platform.platform())
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allows all origins
    allow_credentials=True,
    allow_methods=["*"], # Allows all methods
    allow_headers=["*"], # Allows all headers
)

# tokenizer = CLIPTokenizer.from_pretrained("openai/clip-vit-large-patch14", torch_dtype=torch.float16)
# text_encoder = CLIPTextModel.from_pretrained("openai/clip-vit-large-patch14", torch_dtype=torch.float16).to("cuda")


device = "cuda"
model_id = "stablediffusionapi/anything-v5"
# model_id = "CompVis/stable-diffusion-v1-4"
pipe = StableDiffusionPipeline.from_pretrained(model_id, use_safetensors=True, torch_dtype=torch.float16, token=token)
pipe.to(device)


@app.get("/")
def generate(prompt: str): 
    with autocast(device): 
        image = pipe(prompt, guidance_scale=8.5).images[0]

    image.save(prompt + " testimage.png")

    buffer = BytesIO()
    image.save(buffer, format="PNG")
    imgstr = base64.b64encode(buffer.getvalue())

    return Response(content=imgstr, media_type="image/png")