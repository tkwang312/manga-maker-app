import { Flex, Box, Heading, Text, Button, Spacer, HStack } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex as="nav" p="10px">
        <Heading as="h1">Tasks</Heading>
        <Spacer />
        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">A</Box>
            <Text>potato-lover-102</Text>
            <Button colorScheme="purple">Logout</Button>
        </HStack>

    </Flex>
  )
}

export default Navbar