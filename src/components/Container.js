import React from 'react'
import { Switch, Route } from 'react-router-dom'

let InactiveAccounts, ActiveAccounts, Account, Countries, Country
let Farms, Farm, Users, User, Employees, Employee, Profile, FieldCrops, MachineDetails

const Container = ({ role }) => {
    switch (role) {
        case "master":
            InactiveAccounts = React.lazy(() => import('plugins/InactiveAccounts'))
            ActiveAccounts = React.lazy(() => import('plugins/ActiveAccounts'))
            Account = React.lazy(() => import('plugins/Account'))
            Countries = React.lazy(() => import('plugins/Countries'))
            Country = React.lazy(() => import('plugins/Country'))

            return (
                <div className="container">
                    <React.Suspense fallback={<span>Loading...</span>}>
                        <Switch>
                            <Route path='/inactive-accounts/:accountId'><Account /></Route>
                            <Route path='/inactive-accounts'><InactiveAccounts /></Route>
                            <Route path='/active-accounts/:accountId'><Account /></Route>
                            <Route path='/active-accounts'><ActiveAccounts /></Route>
                            <Route path='/countries/:countryCode'><Country /></Route>
                            <Route path='/countries'><Countries /></Route>
                        </Switch>
                    </React.Suspense>
                </div>
            )
        case "admin":
            Farms = React.lazy(() => import('plugins/Farms'))
            Farm = React.lazy(() => import('plugins/Farm'))
            FieldCrops = React.lazy(() => import('plugins/FieldCrops'))
            MachineDetails = React.lazy(() => import('plugins/MachineDetails'))
            Users = React.lazy(() => import('plugins/Users'))
            User = React.lazy(() => import('plugins/User'))
            Employees = React.lazy(() => import('plugins/Employees'))
            Employee = React.lazy(() => import('plugins/Employee'))
            Profile = React.lazy(() => import('plugins/Profile'))

            return (
                <div className="container">
                    <React.Suspense fallback={<span>Loading...</span>}>
                        <Switch>
                            <Route path='/farms/:farmId'><Farm /></Route>
                            <Route path='/farms'><Farms /></Route>
                            <Route path='/fields/:fieldId/crops'><FieldCrops /></Route>
                            <Route path='/machines/:machineId'><MachineDetails /></Route>
                            <Route path='/users/:userId'><User /></Route>
                            <Route path='/users'><Users /></Route>
                            <Route path='/employees/:employeeId'><Employee /></Route>
                            <Route path='/employees'><Employees /></Route>
                            <Route path='/profile'><Profile /></Route>
                        </Switch>
                    </React.Suspense>
                </div>
            )
    
        default:
            return null;
    }
}

export default Container
