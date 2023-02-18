import { Box } from '@chakra-ui/react'
import React from 'react'
import BackToHomeBtn from '../components/BackToHomeBtn'
import RegisterForm from '../components/RegisterComponents/RegisterForm'

const Register = () => {
  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <BackToHomeBtn />
      <RegisterForm />
    </Box>
  )
}

export default Register