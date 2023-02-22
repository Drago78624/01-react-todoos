import { Container } from '@chakra-ui/react'
import React, {useContext} from 'react'
import Form from '../components/HomePageComponents/Form';
import Navbar from '../components/Navbar'
import Todos from '../components/HomePageComponents/Todos';
import { auth } from '../firebase-config';
import UtilityContext from "../utility-context";
import AuthContext from '../auth-context';


const Home = () => {
  const utilityCtx = useContext(UtilityContext);
  const authCtx = useContext(AuthContext)

  return (
    <>
      <Navbar />
      <Container maxW={utilityCtx.maxWidth}>
        <Todos />
      </Container>
    </>
  )
}

export default Home