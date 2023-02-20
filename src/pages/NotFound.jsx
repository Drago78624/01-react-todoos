import { Link } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    not found
    <Link as={RouterLink} to="/">login</Link>
    </>
  )
}

export default NotFound