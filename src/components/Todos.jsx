import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Todo from './Todo'

const Todos = () => {
  return (
    <Box>
        <Heading size="lg">Your Todos</Heading>
        <VStack mt={4}>
            <Todo />
            <Todo />
            <Todo />
        </VStack>
    </Box>
  )
}

export default Todos