import React, { useContext } from "react";

const initializeUserData = (auth, authCtx, msgCtx) => {
  authCtx.setUserStatus(true);
  authCtx.setUserId(auth.currentUser.uid);
  msgCtx.setShowMessage(true);
  msgCtx.setMessage("You've successfully logged in !");
  msgCtx.setMessageState("success");

  console.log("initialization finished !")
};

export default initializeUserData;
