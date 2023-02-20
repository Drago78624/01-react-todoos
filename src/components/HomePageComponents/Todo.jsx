import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import UtilityContext from '../../utility-context'

const Todo = () => {
    const utilityCtx = useContext(UtilityContext)
  return (
    <Box width="full" padding={3} boxShadow="xl">
        <Flex justifyContent="space-between" alignItems="center" flexDirection={{base: "column", md: "row"}}>
            <Text mb={{base: 4, md: 0}}>Go shopping</Text>
            <Text mb={{base: 5, md: 0}}>Buy tomatoes, onions, potatoes and soap</Text>
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