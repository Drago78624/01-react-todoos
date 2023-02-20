import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../auth-context";

const ProtectedRoutes = () => {
  const authCtx = useContext(AuthContext);

  return authCtx.userStatus ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
