import { Container } from '@chakra-ui/react'
import React, {useContext} from 'react'
import Form from '../components/Form';
import Navbar from '../components/Navbar'
import Todos from '../components/Todos';
import { auth } from '../firebase-config';
import UtilityContext from "../utility-context";


const Home = () => {
  const utilityCtx = useContext(UtilityContext);

  console.log(auth?.currentUser?.email)

  return (
    <>
      <Navbar />
      <Container maxW={utilityCtx.maxWidth}>
        <Form colorScheme={utilityCtx.colorScheme} />
        <Todos />
      </Container>
    </>
  )
}

export default Home