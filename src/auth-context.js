import React from "react";

const AuthContext = React.createContext({
    userStatus: "",
    setUserStatus: () => {}
})

export default AuthContext