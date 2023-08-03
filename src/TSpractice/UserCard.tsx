import React from 'react'
import { User } from './types'

interface UserProps<T> {
    user: T
}

export const UserCard: React.FC<UserProps<User>> = ({ user }) => {
    const { name, email } = user 
    console.log(user, 'user')
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}