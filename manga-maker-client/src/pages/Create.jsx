import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  Button,
  Wrap,
  Stack, 
  Image,
  Link,
  SkeletonCircle,
  SkeletonText,
  TabList,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";


const Create = () => {
  const [image, updateImage] = useState();
  const [prompt, updatePrompt] = useState();
  const [loading, updateLoading] = useState();

  const generate = async (prompt) => {
    updateLoading(true);
    const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`);
    updateImage(result.data);
    updateLoading(false);
  };
  return (
    <ChakraProvider>
        <Tabs>
          <TabList>
            <Tab _selected={{ color: 'white', bg: 'blue.200'}}>Characters</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.200'}}>Backgrounds</Tab>
            <Tab _selected={{ color: 'white', bg: 'blue.200'}}>Story</Tab>
          </TabList> 
          <TabPanels>
            <TabPanel>
              <Heading>Create Character</Heading>
              <Text marginBottom={"10px"}>
                This react application leverages the model trained by Stability AI and
                Runway ML to generate images using the Stable Diffusion Deep Learning
                model. The model can be found via github here{" "}
                <Link href={"https://github.com/CompVis/stable-diffusion"}>
                  Github Repo
                </Link>
              </Text>

              <Wrap marginBottom={"10px"}>
                <Input
                  value={prompt}
                  onChange={(e) => updatePrompt(e.target.value)}
                  width={"350px"}
                ></Input>
                <Button onClick={(e) => generate(prompt)} colorScheme={"yellow"}>
                  Generate
                </Button>
              </Wrap>

              {loading ? (
                <Stack>
                  <SkeletonCircle />
                  <SkeletonText />
                </Stack>
              ) : image ? (
                <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
              ) : null}
            </TabPanel>

            <TabPanel>
              <Heading>Create Background</Heading>
              <Text marginBottom={"10px"}>
                This react application leverages the model trained by Stability AI and
                Runway ML to generate images using the Stable Diffusion Deep Learning
                model. The model can be found via github here{" "}
                <Link href={"https://github.com/CompVis/stable-diffusion"}>
                  Github Repo
                </Link>
              </Text>

              <Wrap marginBottom={"10px"}>
                <Input
                  value={prompt}
                  onChange={(e) => updatePrompt(e.target.value)}
                  width={"350px"}
                ></Input>
                <Button onClick={(e) => generate(prompt)} colorScheme={"yellow"}>
                  Generate
                </Button>
              </Wrap>

              {loading ? (
                <Stack>
                  <SkeletonCircle />
                  <SkeletonText />
                </Stack>
              ) : image ? (
                <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
              ) : null}
            </TabPanel>


            <TabPanel>
              <Heading>Create Story</Heading>
              <Text marginBottom={"10px"}>
                This react application leverages the model trained by Stability AI and
                Runway ML to generate images using the Stable Diffusion Deep Learning
                model. The model can be found via github here{" "}
                <Link href={"https://github.com/CompVis/stable-diffusion"}>
                  Github Repo
                </Link>
              </Text>

              <Wrap marginBottom={"10px"}>
                <Input
                  value={prompt}
                  onChange={(e) => updatePrompt(e.target.value)}
                  width={"350px"}
                ></Input>
                <Button onClick={(e) => generate(prompt)} colorScheme={"yellow"}>
                  Generate
                </Button>
              </Wrap>

              {loading ? (
                <Stack>
                  <SkeletonCircle />
                  <SkeletonText />
                </Stack>
              ) : image ? (
                <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
              ) : null}
            </TabPanel>

          </TabPanels>
        </Tabs>
    </ChakraProvider>
  )
}

export default Create
