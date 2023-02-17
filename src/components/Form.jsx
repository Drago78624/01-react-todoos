import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";

const Form = (props) => {
  return (
    <Box padding={3}>
      <Heading>Add Todo</Heading>
      <FormControl marginTop={4}>
        <FormLabel>Title</FormLabel>
        <Input placeholder="e.g Go shopping" type="email" />
      </FormControl>
      <FormControl marginTop={4}>
        <FormLabel>Details</FormLabel>
        <Textarea placeholder='e.g Buy tomatoes, onions, potatoes and soap' />
      </FormControl>
      <Button colorScheme={props.colorScheme} mt={4}>Add</Button>
    </Box>
  );
};

export default Form;
