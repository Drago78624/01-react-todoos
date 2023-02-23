import React, { useContext, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import UtilityContext from "../../utility-context";
import { EditIcon } from "@chakra-ui/icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import MessageContext from "../../message-context";

const TodoModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const utilityCtx = useContext(UtilityContext);
  const msgCtx = useContext(MessageContext);
  const [newTodoTitle, setNewTodoTitle] = useState(props.todoTitle)
  const [newTodoDesc, setNewTodoDesc] = useState(props.todoDesc)

  const onUpdateTodo = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await updateDoc(todoDoc, {
        todo_title: newTodoTitle,
        todo_description: newTodoDesc
    });
    msgCtx.setShowMessage(true);
    msgCtx.setMessage("Todo has been updated !");
    msgCtx.setMessageState("success");
    onClose()
    props.getTodos();
  };

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={utilityCtx.colorScheme}
        variant="outline"
      >
        <EditIcon />
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update you todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={newTodoTitle} onChange={e => setNewTodoTitle(e.target.value)}
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Details</FormLabel>
              <Textarea value={newTodoDesc} onChange={e => setNewTodoDesc(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => onUpdateTodo(props.todoId)} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TodoModal;
