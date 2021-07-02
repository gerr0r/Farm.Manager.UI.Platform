import React from 'react'

import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import Container from '../components/Container'
import Footer from '../components/Footer'

import { useAuthContext } from '../AuthContext'

const Main = () => {
    const { account } = useAuthContext()

    return (
        <div className="main">
            <Header />
            <div className="content">
                <SideMenu role={account.role} />
                <Container role={account.role} />
            </div>
            <Footer />
        </div>
    )
}

export default Main