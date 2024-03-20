import { Box, SimpleGrid } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <SimpleGrid spacing={10} minChildWidth={250} p="10px">
      <Box bg="gray.200" h="200px" border="1px solid"> </Box>
      <Box bg="gray.200" h="200px" border="1px solid"> </Box>
      <Box bg="gray.200" h="200px" border="1px solid"> </Box>
      <Box bg="gray.200" h="200px" border="1px solid"> </Box>

      <Box bg="gray.200" h="200px" border="1px solid"> </Box>
      <Box bg="gray.200" h="200px" border="1px solid"> </Box>
      <Box bg="gray.200" h="200px" border="1px solid"> </Box>
      <Box bg="gray.200" h="200px" border="1px solid"> </Box>

    </SimpleGrid>
  )
}

export default Dashboard