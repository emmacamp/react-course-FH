import { useState } from "react"
import { UserContext } from "./UserContext"


export const UserProvaider = ({children}) => {
    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
}
