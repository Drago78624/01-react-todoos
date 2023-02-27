import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import React, { useContext, useState } from "react";
import AuthContext from "../../auth-context";
import { db } from "../../firebase-config";
import MessageContext from "../../message-context";

const Form = (props) => {
  const authCtx = useContext(AuthContext);
  const msgCtx = useContext(MessageContext);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const userId = authCtx.userId;

  const todosCollectionRef = collection(db, "todos");

  const onAddTodo = async () => {
    try {
      if (todoTitle && todoDesc) {
        await addDoc(todosCollectionRef, {
          todo_title: todoTitle,
          todo_description: todoDesc,
          user_id: userId,
        });
        msgCtx.setShowMessage(true);
        msgCtx.setMessage("A todo has been added !");
        msgCtx.setMessageState("success");
        props.getTodos();
        setTodoTitle("");
        setTodoDesc("");
      } else {
        console.log("enter something dummy");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box my={8}>
      <Heading size="lg">Add Todo</Heading>
      <FormControl marginTop={4}>
        <FormLabel>Title</FormLabel>
        <Input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="e.g Go shopping"
          type="email"
        />
      </FormControl>
      <FormControl marginTop={4}>
        <FormLabel>Details</FormLabel>
        <Textarea
          value={todoDesc}
          onChange={(e) => setTodoDesc(e.target.value)}
          placeholder="e.g Buy tomatoes, onions, potatoes and soap"
        />
      </FormControl>
      <Button onClick={onAddTodo} colorScheme={props.colorScheme} mt={4}>
        Add
      </Button>
    </Box>
  );
};

export default Form;
