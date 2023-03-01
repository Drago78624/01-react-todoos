import React from "react"

const UtilityContext = React.createContext({
    colorScheme: "purple",
    maxWidth: "992px",
    lightColor: "purple.600",
    darkColor: "purple.400"
})

export default UtilityContext