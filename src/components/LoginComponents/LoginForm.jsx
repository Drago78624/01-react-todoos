import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  VStack,
  Text,
  FormControl,
  FormErrorMessage,
  Link,
} from "@chakra-ui/react";
import { FaGooglePlusG, FaFacebookSquare } from "react-icons/fa";
import React, { useContext, useState } from "react";
import UtilityContext from "../../utility-context";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase-config";
import AuthContext from "../../auth-context";
import MessageContext from "../../message-context";
import initializeUserData from "../../initializeUserData";

const LoginForm = () => {
  const utilityCtx = useContext(UtilityContext);
  const msgCtx = useContext(MessageContext);
  const authCtx = useContext(AuthContext);
  const [wrongPass, setWrongPass] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().min(8).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onLogin = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      initializeUserData(auth, authCtx, msgCtx);
    } catch (err) {
      const errorCode = err.code;
      if (errorCode === "auth/wrong-password") {
        console.log("wrong password");
        setWrongPass(true);
      } else if (errorCode === "auth/user-not-found") {
        console.log("user does not exist");
        setUserNotFound(true);
      } else {
        console.log(err);
      }
    }
  };

  const onLogInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      initializeUserData(auth, authCtx, msgCtx);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box textAlign="center" minW={{ base: "300px", sm: "400px" }}>
      <Heading mb={8} size="lg">
        Sign in
      </Heading>
      <form onSubmit={handleSubmit(onLogin)}>
        <VStack spacing={5}>
          <FormControl isInvalid={errors.email || userNotFound}>
            <Input
              variant="flushed"
              placeholder="Email address"
              type="email"
              {...register("email")}
            />
            <FormErrorMessage>
              {errors.email?.message || (userNotFound && "User does not exist")}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password || wrongPass}>
            <Input
              variant="flushed"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <FormErrorMessage>
              {errors.password?.message.charAt(0).toUpperCase() +
                errors.password?.message.slice(1) ||
                (wrongPass && "Bad email or password")}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            colorScheme={utilityCtx.colorScheme}
            width="full"
          >
            Sign in
          </Button>
        </VStack>
      </form>
      <Divider my={5} />
      <VStack spacing={5}>
        <Button onClick={onLogInWithGoogle} colorScheme="red" width="full">
          <FaGooglePlusG size={30} />
          <Text ml={3}>Sign in with Google</Text>
        </Button>
        <Button colorScheme="blue" width="full">
          <FaFacebookSquare size={25} />
          <Text ml={3}>Sign in with Facebook</Text>
        </Button>
        <Text>
          Don't have an account ?{" "}
          <Link as={RouterLink} to="/register">
            Create account
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default LoginForm;
