import { Box, Heading, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import Todo from "./Todo";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import AuthContext from "../../auth-context";
import Form from "./Form";
import UtilityContext from "../../utility-context";
import MessageContext from "../../message-context";

const Todos = () => {
  const utilityCtx = useContext(UtilityContext);
  const msgCtx = useContext(MessageContext);
  const authCtx = useContext(AuthContext);
  const todosCollectionRef = collection(db, "todos");
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const fetchingQuery = query(
      todosCollectionRef,
      where("user_id", "==", authCtx.userId)
    );

    onSnapshot(fetchingQuery, (snapshot) => {
      const fetchedData = [];
      snapshot.docs.map((doc) => {
        fetchedData.push({ ...doc.data(), id: doc.id });
      });
      setTodos(fetchedData);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onDeleteTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
    msgCtx.setShowMessage(true);
    msgCtx.setMessage("Todo has been deleted !");
    msgCtx.setMessageState("success");
    getTodos();
  };

  const displayTodos = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        getTodos={getTodos}
        onDeleteTodo={onDeleteTodo}
        title={todo.todo_title}
        description={todo.todo_description}
      />
    );
  });

  return (
    <>
      <Box>
        <Form getTodos={getTodos} colorScheme={utilityCtx.colorScheme} />
        <Heading size="lg">Your Todos</Heading>
        <VStack mt={4}>
          {todos.length > 0 ? (
            displayTodos
          ) : (
            <Heading size="lg">No Todos Found</Heading>
          )}
        </VStack>
      </Box>
    </>
  );
};

export default Todos;
