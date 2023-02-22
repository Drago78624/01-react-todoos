import { Box } from '@chakra-ui/react'
import React from 'react'
import BackToHomeBtn from '../components/BackToHomeBtn'
import LoginForm from '../components/LoginComponents/LoginForm'

const Login = () => {
  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
      {/* <BackToHomeBtn /> */}
      <LoginForm />
    </Box>
  )
}

export default Login