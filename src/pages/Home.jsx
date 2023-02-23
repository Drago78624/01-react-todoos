import { Container } from '@chakra-ui/react'
import React, {useContext, useEffect, useState} from 'react'
import Form from '../components/HomePageComponents/Form';
import Navbar from '../components/Navbar'
import Todos from '../components/HomePageComponents/Todos';
import { auth } from '../firebase-config';
import UtilityContext from "../utility-context";
import AuthContext from '../auth-context';
import Message from '../components/Message';
import MessageContext from '../message-context';


const Home = () => {
  const utilityCtx = useContext(UtilityContext);
  const msgCtx = useContext(MessageContext);
  const authCtx = useContext(AuthContext)
  
  useEffect(()=>{
    const timer = setTimeout(() => {
      if(msgCtx.showMessage){
        msgCtx.setShowMessage(false)
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [msgCtx.showMessage])

  return (
    <>
      <Navbar />
      <Container maxW={utilityCtx.maxWidth}>
        {msgCtx.showMessage && <Message message={msgCtx.message} messageState={msgCtx.messageState} />}
        <Todos />
      </Container>
    </>
  )
}

export default Home