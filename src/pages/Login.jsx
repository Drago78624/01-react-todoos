import { Box } from '@chakra-ui/react'
import React from 'react'
import LoginForm from '../components/LoginComponents/LoginForm'

const Login = () => {
  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <LoginForm />
    </Box>
  )
}

export default Login