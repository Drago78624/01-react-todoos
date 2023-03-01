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
  FormErrorMessage,
} from "@chakra-ui/react";
import UtilityContext from "../../utility-context";
import { EditIcon } from "@chakra-ui/icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import MessageContext from "../../message-context";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const TodoModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const utilityCtx = useContext(UtilityContext);
  const msgCtx = useContext(MessageContext);

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
    defaultValues: {
      title: props.todoTitle,
      details: props.todoDesc,
    },
  });

  const onUpdateTodo = async (data) => {
    const todoId = props.todoId;
    const todoDoc = doc(db, "todos", todoId);
    if(data.title !== props.todoTitle || data.details !== props.todoDesc){
      await updateDoc(todoDoc, {
        todo_title: data.title,
        todo_description: data.details,
      });
      msgCtx.setShowMessage(true);
      msgCtx.setMessage("Todo has been updated !");
      msgCtx.setMessageState("success");
      onClose();
      props.getTodos();
    }
  };

  const handleClose = () => {
    reset()
    onClose()
  }

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
        onClose={handleClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update you todo</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onUpdateTodo)}>
            <ModalBody pb={6}>
              <FormControl isInvalid={errors.title}>
                <FormLabel>Title</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="title..."
                  {...register("title")}
                />
                <FormErrorMessage>
                  {errors.title?.message.charAt(0).toUpperCase() +
                    errors.title?.message.slice(1)}
                </FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.details}>
                <FormLabel>Details</FormLabel>
                <Textarea placeholder="details..." {...register("details")} />
                <FormErrorMessage>
                  {errors.details?.message.charAt(0).toUpperCase() +
                    errors.details?.message.slice(1)}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme={utilityCtx.colorScheme} mr={3}>
                Save
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TodoModal;
