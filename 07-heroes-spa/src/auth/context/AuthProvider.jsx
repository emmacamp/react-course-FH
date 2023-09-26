import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { useContext } from "react"
import { types } from "../types/types"

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return { logged: !!user, user: user }
    }

    const [state, dispath] = useReducer(authReducer, {}, init)

    const login = (name = '') => {

        const user = { id: 123, name }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispath(action)
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout }
        dispath(action)
    }


    return (
        <AuthContext.Provider value={{ ...state, login: login, logout: logout }}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => useContext(AuthContext);
