import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import Routes from './Routes'
import AuthContextProvider from './AuthContext'

// const Ping = React.lazy(() => import("plugins/Ping"))

const App = () => {
    return (
        <div>
            <AuthContextProvider>
                <ErrorBoundary fallback={<span>Component failed to load</span>}>
                    {/* <React.Suspense fallback={<span>Loading...</span>}>
                        <Ping />
                    </React.Suspense> */}
                    <Routes />
                </ErrorBoundary>
            </AuthContextProvider>
        </div>
    )
}

export default App