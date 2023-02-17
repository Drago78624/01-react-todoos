import { Box } from '@chakra-ui/react'
import React from 'react'
import RegisterForm from '../components/RegisterComponents/RegisterForm'

const Register = () => {
  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <RegisterForm />
    </Box>
  )
}

export default Register