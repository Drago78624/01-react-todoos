import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../auth-context";

const ProtectedRoutesForAuth = () => {
  const authCtx = useContext(AuthContext);

  return authCtx.userStatus ? <Navigate to="/home" /> : <Outlet />;
};

export default ProtectedRoutesForAuth;
