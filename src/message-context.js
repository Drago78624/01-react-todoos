import React from "react";

const MessageContext = React.createContext({
    showMessage: false,
    setShowMessage: ()=>{},
    message: "",
    setMessage: ()=>{},
    messageState: "",
    setMessageState: ()=>{}
})

export default MessageContext