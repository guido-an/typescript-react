import React from 'react'
import { User } from './types'

interface UserProps {
    user: User
}

export const UserCard: React.FC<UserProps> = ({ user }) => {
    const { name, email } = user 
    console.log(user, 'user')
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}