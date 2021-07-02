import React from 'react'
import { useAuthContext } from "../AuthContext"
 
const Header = () => {
    const { logout } = useAuthContext()

    return (
        <div className="header">
            <span>WELCOME</span>
            <span className="logout" onClick={logout}>LOGOUT</span>
        </div>
    )
}

export default Header
