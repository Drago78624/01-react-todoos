import { Container } from '@chakra-ui/react'
import React, {useContext} from 'react'
import Form from '../components/Form';
import Navbar from '../components/Navbar'
import UtilityContext from "../utility-context";


const Home = () => {
  const utilityCtx = useContext(UtilityContext);

  return (
    <>
      <Navbar />
      <Container maxW={utilityCtx.maxWidth}>
        <Form colorScheme={utilityCtx.colorScheme} />
      </Container>
    </>
  )
}

export default Home