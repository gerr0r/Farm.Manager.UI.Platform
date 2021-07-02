import React from 'react'
import { Switch, Route } from 'react-router-dom'

const InactiveAccounts = React.lazy(() => import('plugins/InactiveAccounts'))
const ActiveAccounts = React.lazy(() => import('plugins/ActiveAccounts'))
const Countries = React.lazy(() => import('plugins/Countries'))
const Account = React.lazy(() => import('plugins/Account'))

const Container = ({ role }) => {

    return (
        <div className="container">
            <React.Suspense fallback={<span>Loading...</span>}>
                <Switch>
                    <Route path='/inactive-accounts/:accountId'><Account /></Route>
                    <Route path='/inactive-accounts'><InactiveAccounts /></Route>
                    <Route path='/active-accounts/:accountId'><Account /></Route>
                    <Route path='/active-accounts'><ActiveAccounts /></Route>
                    <Route path='/countries'><Countries /></Route>
                </Switch>
            </React.Suspense>
        </div>
    )
}

export default Container
