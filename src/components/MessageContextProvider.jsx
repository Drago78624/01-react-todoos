import React, { useState } from 'react'
import MessageContext from '../message-context'

const MessageContextProvider = (props) => {
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")
    const [messageState, setMessageState] = useState("")
  return (
    <MessageContext.Provider value={{showMessage, setShowMessage, message, setMessage, messageState, setMessageState}}>
        {props.children}
    </MessageContext.Provider>
  )
}

export default MessageContextProvider