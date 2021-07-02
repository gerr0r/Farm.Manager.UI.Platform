import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useAuthContext } from './AuthContext'

import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'

const Routes = () => {
    const { auth, account } = useAuthContext()

    return (
        <Router>
            <Switch>
                <Route exact path='/login'>{auth ? <Redirect to='/' /> : <Login />}</Route>
                <Route exact path='/register'>{auth ? <Redirect to='/' /> : <Register />}</Route>
                <Route path='/'>{auth ? <Main /> : <Redirect to='/login' />}</Route>
            </Switch>
        </Router>
    )
}

export default Routes