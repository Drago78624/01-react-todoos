import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext } from "react";
import AuthContext from "../../auth-context";
import { db } from "../../firebase-config";
import MessageContext from "../../message-context";

const Form = (props) => {
  const authCtx = useContext(AuthContext);
  const msgCtx = useContext(MessageContext);
  const userId = authCtx.userId;

  const formSchema = yup.object().shape({
    title: yup.string().min(4).required("Please enter todo title"),
    details: yup.string().min(8).required("Please enter todo details"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const todosCollectionRef = collection(db, "todos");

  const onAddTodo = async (data) => {
    try {
      await addDoc(todosCollectionRef, {
        todo_title: data.title,
        todo_description: data.details,
        user_id: userId,
      });
      msgCtx.setShowMessage(true);
      msgCtx.setMessage("A todo has been added !");
      msgCtx.setMessageState("success");
      props.getTodos();
      reset()
      console.log(titleInputRef.current.value)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box my={8}>
      <Heading size="lg">Add Todo</Heading>
      <form onSubmit={handleSubmit(onAddTodo)}>
        <FormControl marginTop={4} isInvalid={errors.title}>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="e.g Go shopping"
            type="text"
            {...register("title")}
          />
          <FormErrorMessage>{errors.title?.message.charAt(0).toUpperCase() +
                errors.title?.message.slice(1)}</FormErrorMessage>
        </FormControl>
        <FormControl marginTop={4} isInvalid={errors.details}>
          <FormLabel>Details</FormLabel>
          <Textarea
            placeholder="e.g Buy tomatoes, onions, potatoes and soap"
            {...register("details")}
          />
          <FormErrorMessage>{errors.details?.message.charAt(0).toUpperCase() +
                errors.details?.message.slice(1)}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme={props.colorScheme} mt={4}>
          Add
        </Button>
      </form>
    </Box>
  );
};

export default Form;
