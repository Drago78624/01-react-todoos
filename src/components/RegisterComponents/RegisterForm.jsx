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
} from "@chakra-ui/react";
import { FaGooglePlusG, FaFacebookSquare } from "react-icons/fa";
import React, { useContext, useState } from "react";
import UtilityContext from "../../utility-context";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
  const utilityCtx = useContext(UtilityContext);

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

  const onSignUp = (data) => {
    console.log(data);
  };

  return (
    <Box textAlign="center" minW={{ base: "300px", sm: "400px" }}>
      <Heading mb={8} size="lg">
        Register
      </Heading>
      <form onSubmit={handleSubmit(onSignUp)}>
        <VStack spacing={5}>
          <FormControl isInvalid={errors.email}>
            <Input
              variant="flushed"
              placeholder="Email address"
              type="email"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <Input
              variant="flushed"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message.charAt(0).toUpperCase() + errors.password?.message.slice(1)}</FormErrorMessage>
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

export default RegisterForm;
