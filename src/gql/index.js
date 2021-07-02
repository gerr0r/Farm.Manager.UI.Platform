import { gql } from '@apollo/client'

export const LOGIN = gql`
    query Login($email: String, $password: String) {
        login(email: $email, password: $password) {
            token
            account {
                id
                email
                role
            }
        }
    }
`

export const REGISTER = gql`
    mutation Register($email: String, $password: String) {
        register(email: $email, password: $password)
    }
`

export const VERIFY = gql`
    query Verify {
        verify {
            id
            email
            role
        }
    }
`