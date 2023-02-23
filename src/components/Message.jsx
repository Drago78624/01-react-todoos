import React from "react";
import {
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const Message = (props) => {
  return (
    <Alert status={props.messageState} variant="left-accent">
      <AlertIcon />
      {props.message}
    </Alert>
  );
};

export default Message;
