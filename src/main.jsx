import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider>
        <App />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>
);
