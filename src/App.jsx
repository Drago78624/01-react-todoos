import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AuthContextProvider from "./components/AuthContextProvider";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProtectedRoutesForAuth from "./components/ProtectedRoutesForAuth";
import MessageContextProvider from "./components/MessageContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <MessageContextProvider>
      <Routes>
        <Route element={<ProtectedRoutesForAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </MessageContextProvider>
    </AuthContextProvider>
  );
};

export default App;
