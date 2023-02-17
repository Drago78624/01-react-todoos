import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import UtilityContext from '../utility-context'

const Todo = () => {
    const utilityCtx = useContext(UtilityContext)
  return (
    <Box width="full" padding={3} boxShadow="xl">
        <Flex justifyContent="space-between" alignItems="center">
            <Text>Go shopping</Text>
            <Text>Buy tomatoes, onions, potatoes and soap</Text>
            <HStack>
                <Button colorScheme={utilityCtx.colorScheme} variant="outline">
                    <EditIcon />
                </Button>
                <Button colorScheme={utilityCtx.colorScheme}>
                    <DeleteIcon />
                </Button>
            </HStack>
        </Flex>
    </Box>
  )
}

export default Todo