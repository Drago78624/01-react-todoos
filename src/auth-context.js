import React from "react";

const AuthContext = React.createContext({
    userStatus: "",
    setUserStatus: () => {},
    userId: "",
    setUserId: ()=>{},
})

export default AuthContext