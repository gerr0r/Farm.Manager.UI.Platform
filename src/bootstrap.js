import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, HttpLink } from '@apollo/client'

const APOLLO_GATEWAY_SERVER = 'http://localhost:4000'

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: { 'Authorization': localStorage.getItem('auth-token') || undefined }
    })
    return forward(operation)
})

const serverLink = new HttpLink({
    uri: APOLLO_GATEWAY_SERVER
})

const client = new ApolloClient({
    link: ApolloLink.from([authLink, serverLink]),
    cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)