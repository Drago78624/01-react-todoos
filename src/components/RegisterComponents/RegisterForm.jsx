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
import { auth, facebookAuthProvider, googleAuthProvider } from "../../firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth-context";
import MessageContext from "../../message-context";

const RegisterForm = () => {
  const utilityCtx = useContext(UtilityContext);
  const msgCtx = useContext(MessageContext);
  const [userExists, setUserExists] = useState(false)
  const authCtx = useContext(AuthContext)

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("Please enter your email"),
    password: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match")
      .required("Please confirm your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSignUp = async (data) => {
    console.log(data);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      authCtx.setUserStatus(true)
      authCtx.setUserId(auth.currentUser.uid)
      msgCtx.setShowMessage(true)
      msgCtx.setMessage("You've successfully logged in !")
      msgCtx.setMessageState("success")
    } catch (err) {
      const errorCode = err.code;
      if (errorCode === "auth/email-already-in-use") {
        console.log("User already exists with this email");
        // Show custom error message here
        setUserExists(true)
      } else {
        console.log(err);
      }
    }
  };

  const onSignUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      authCtx.setUserStatus(true)
      authCtx.setUserId(auth.currentUser.uid)
      msgCtx.setShowMessage(true)
      msgCtx.setMessage("You've successfully logged in !")
      msgCtx.setMessageState("success")
    } catch (err) {
      console.log(err);
    }
  };

  const onSignUpWithFacebook= async () => {
    try {
      await signInWithPopup(auth, facebookAuthProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box textAlign="center" minW={{ base: "300px", sm: "400px" }}>
      <Heading mb={8} size="lg">
        Register
      </Heading>
      <form onSubmit={handleSubmit(onSignUp)}>
        <VStack spacing={5}>
          <FormControl isInvalid={errors.email || userExists}>
            <Input
              variant="flushed"
              placeholder="Email address"
              type="email"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message || (userExists && "User already exists")}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <Input
              variant="flushed"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <FormErrorMessage>
              {errors.password?.message.charAt(0).toUpperCase() +
                errors.password?.message.slice(1)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.confirmPassword}>
            <Input
              variant="flushed"
              placeholder="Confirm Password"
              type="password"
              {...register("confirmPassword")}
            />
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            colorScheme={utilityCtx.colorScheme}
            width="full"
          >
            Register
          </Button>
        </VStack>
      </form>
      <Divider my={5} />
      <VStack spacing={5}>
        <Button onClick={onSignUpWithGoogle} colorScheme="red" width="full">
          <FaGooglePlusG size={30} />
          <Text ml={3}>Sign in with Google</Text>
        </Button>
        <Button colorScheme="blue" width="full">
          <FaFacebookSquare size={25} />
          <Text ml={3}>Sign in with Facebook</Text>
        </Button>
        <Text>
          Already have an account ?{" "}
          <Link as={RouterLink} to="/">
            Login
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default RegisterForm;
