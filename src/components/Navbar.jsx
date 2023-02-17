import { Box, Button, Container, Heading, HStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import UtilityContext from "../utility-context";
import ToggleColorModeBtn from "./ToggleColorModeBtn";

const Navbar = () => {
  const utilityCtx = useContext(UtilityContext);

  return (
    <Box p={3} boxShadow="lg">
      <Container
        maxW={utilityCtx.maxWidth}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as={RouterLink} size="lg" to="/">
          Todoos!
        </Heading>
        <HStack>
          <ToggleColorModeBtn colorScheme={utilityCtx.colorScheme} />
          <Button
            as={RouterLink}
            to="/login"
            variant="outline"
            colorScheme={utilityCtx.colorScheme}
          >
            Login
          </Button>
          <Button as={RouterLink} to="/register" colorScheme={utilityCtx.colorScheme}>
            Register
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
