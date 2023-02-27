import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
// import  ReactDOM  from "react-dom";
import UtilityContext from "../../utility-context";
import TodoModal from "./TodoModal";

const Todo = (props) => {
  const utilityCtx = useContext(UtilityContext);

  return (
    <>
    {/* {ReactDOM.createPortal(<TodoModal  />, document.getElementById("body"))} */}
      <Box width="full" padding={3} boxShadow="xl">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text mb={{ base: 4, md: 0 }}>{props.title}</Text>
          <Text mb={{ base: 5, md: 0 }}>{props.description}</Text>
          <HStack>
            <TodoModal todoId={props.id} todoTitle={props.title} getTodos={props.getTodos} todoDesc={props.description} />
            <Button
              onClick={() => props.onDeleteTodo(props.id)}
              colorScheme={utilityCtx.colorScheme}
            >
              <DeleteIcon />
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Todo;
