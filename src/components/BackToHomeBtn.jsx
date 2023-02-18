import { ArrowBackIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"

const BackToHomeBtn = () => {
  return (
    <Button as={RouterLink} to="/" colorScheme="purple" pos="fixed" left={5} top={5}>
        <ArrowBackIcon mr={2} />
        Back to home
    </Button>
  )
}

export default BackToHomeBtn