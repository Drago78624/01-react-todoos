import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import AuthContext from "../auth-context";
import { auth } from "../firebase-config";

const AuthContextProvider = (props) => {
  const [userStatus, setUserStatus] = useState(false);
  const [userId, setUserId] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserStatus(true);
        setUserId(auth.currentUser.uid)
      } else {
        setUserStatus(false);
        setUserId("")
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userStatus, setUserStatus, userId, setUserId}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
