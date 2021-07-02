import React from 'react'
let Menu = null

const SideMenu = ({role}) => {
    switch (role) {
        case "master":
            Menu = React.lazy(() => import('plugins/MasterMenu'))
            break;
        case "admin":
            Menu = React.lazy(() => import('plugins/AdminMenu'))
            break;
        case "user":
            Menu = React.lazy(() => import('plugins/UserMenu'))
            break;
        default:
            break;
    }


    return (
        <div className="sidemenu">
            <h3>Farm Manager</h3>
            <React.Suspense fallback={<div>Loading...</div>}>
                <Menu />
            </React.Suspense>
        </div>
    )
}

export default SideMenu
