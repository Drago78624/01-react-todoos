import { Box, Button, Divider, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { FaGooglePlusG, FaFacebookSquare } from "react-icons/fa";
import React, { useContext } from "react";
import UtilityContext from "../../utility-context";

const LoginForm = () => {
  const utilityCtx = useContext(UtilityContext);

  return (
    <Box textAlign="center" minW="400px">
      <Heading mb={8} size="lg">
        Sign in
      </Heading>
      <VStack spacing={5}>
        <Input variant="flushed" placeholder="Email address" type="email" />
        <Input variant="flushed" placeholder="Password" type="password" />
        <Button colorScheme={utilityCtx.colorScheme} width="full">
          Sign in
        </Button>
      </VStack>
      <Divider my={5} />
      <VStack spacing={5}>
        <Button colorScheme="red" width="full">
          <FaGooglePlusG size={30} />
          <Text ml={3}>Sign in with Google</Text>
        </Button>
        <Button colorScheme="blue" width="full">
        <FaFacebookSquare size={25} />
          <Text ml={3}>Sign in with Facebook</Text>
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
