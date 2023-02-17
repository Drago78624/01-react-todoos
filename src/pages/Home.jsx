import { Container } from '@chakra-ui/react'
import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import UtilityContext from "../utility-context";


const Home = () => {
  const utilityCtx = useContext(UtilityContext);

  return (
    <>
      <Navbar />
      <Container maxW={utilityCtx.maxWidth}>
        a
      </Container>
    </>
  )
}

export default Home