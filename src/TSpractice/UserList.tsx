import React from 'react'
import { User } from './types'
import { UserCard } from './UserCard'

interface UserListProps<T> {
    usersList: T
}

export const UserList: React.FC<UserListProps<User[]>> = ({ usersList }) => {
    return(
        <>
          {usersList.map(user => {
              return <UserCard user={user} key={user.id}/> 
          })}
        </>
    )
}