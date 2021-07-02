import React, { createContext, useContext, useEffect, useState } from 'react'
import { VERIFY } from "./gql"
import { useQuery } from "@apollo/client"

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [account, setAccount] = useState(null)
    const [auth, setAuth] = useState(false)

    const { loading, data, error } = useQuery(VERIFY, {
        onCompleted(data) {
            setAuth(true)
            setAccount(data.verify)
        },
        onError(error) {
            console.log(error.message)
        }
    })

    function login(token, userData) {
        setAuth(true)
        setAccount(userData)
        localStorage.setItem("auth-token", token)
    }

    function logout() {
        setAuth(false)
        setAccount(null)
        localStorage.removeItem("auth-token")
    }

    return (
        <AuthContext.Provider value={{ auth, account, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    return useContext(AuthContext)
}

export default AuthContextProvider
