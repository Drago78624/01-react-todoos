import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ToggleColorModeBtn = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button variant="ghost" onClick={toggleColorMode} colorScheme={props.colorScheme}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon /> }
    </Button>
  )
}

export default ToggleColorModeBtn