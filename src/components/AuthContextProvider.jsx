import React, { useState } from 'react'
import AuthContext from '../auth-context'
import { auth } from '../firebase-config'

const AuthContextProvider = (props) => {
    const [userStatus, setUserStatus] = useState()

  return (
    <AuthContext.Provider value={{userStatus, setUserStatus}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider