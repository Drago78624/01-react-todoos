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
import React, { useContext, useEffect, useState } from "react";
import UtilityContext from "../../utility-context";
import { auth } from "../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const utilityCtx = useContext(UtilityContext);
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(passwordsMatch)

  const onSignUp = async (values) => {
    if(values["Password"] === values["Confirm Password"]){
      // try {
      //   await createUserWithEmailAndPassword(auth, values["Email"], values["Password"]);
      // } catch (err) {
      //   console.log(err);
      // }
      setPasswordsMatch(true)
      console.log(values);
    }else {
      setPasswordsMatch(false)
    }
  };

  return (
    <Box textAlign="center" minW={{ base: "300px", sm: "400px" }}>
      <Heading mb={8} size="lg">
        Register
      </Heading>
        <VStack spacing={5}>
          <FormControl isInvalid={errors["Full Name"]}>
            <Input
              variant="flushed"
              placeholder="Full name"
              type="text"
              {...register("Full Name", {
                required: true,
                max: 50,
                min: 8,
                maxLength: 50,
              })}
            />
            {errors["Full Name"] && (
              <FormErrorMessage>Please enter your name</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors["Email"]}>
            <Input
              variant="flushed"
              placeholder="Email address"
              type="email"
              {...register("Email", { required: true })}
            />
            {errors["Email"] && (
              <FormErrorMessage>Please enter your email</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors["Password"]}>
            <Input
              variant="flushed"
              placeholder="Password"
              type="password"
              {...register("Password", { required: true, min: 8 })}
            />
            {errors["Password"] && (
              <FormErrorMessage>Please enter your password</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors["Confirm Password"]}>
            <Input
              variant="flushed"
              placeholder="Confirm Password"
              type="password"
              {...register("Confirm Password", { required: true, min: 8 })}
            />
            {!passwordsMatch && (
              <FormErrorMessage>Passwords do not match</FormErrorMessage>
            )}
          </FormControl>
          <Button onClick={handleSubmit(onSignUp)} colorScheme={utilityCtx.colorScheme} width="full">
            Register
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

export default RegisterForm;
