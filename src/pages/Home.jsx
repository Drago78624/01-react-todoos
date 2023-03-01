import { Container } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Todos from "../components/HomePageComponents/Todos";
import UtilityContext from "../utility-context";
import Message from "../components/Message";
import MessageContext from "../message-context";

const Home = () => {
  const utilityCtx = useContext(UtilityContext);
  const msgCtx = useContext(MessageContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (msgCtx.showMessage) {
        msgCtx.setShowMessage(false);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [msgCtx.showMessage]);

  return (
    <>
      <Navbar />
      <Container maxW={utilityCtx.maxWidth}>
        {msgCtx.showMessage && (
          <Message
            message={msgCtx.message}
            messageState={msgCtx.messageState}
          />
        )}
        <Todos />
      </Container>
    </>
  );
};

export default Home;
