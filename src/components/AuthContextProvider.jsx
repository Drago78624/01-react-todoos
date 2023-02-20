import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth-context";
import { auth } from "../firebase-config";

const AuthContextProvider = (props) => {
  const [userStatus, setUserStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserStatus(true);
      } else {
        setUserStatus(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userStatus, setUserStatus }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
