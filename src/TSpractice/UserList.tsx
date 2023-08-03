import React from 'react'
import { User } from './types'
import { UserCard } from './UserCard'

interface UserListProps {
    usersList: User[]
}

export const UserList: React.FC<UserListProps> = ({ usersList }) => {
    return(
        <>
          {usersList.map(user => {
              return <UserCard user={user} key={user.id}/> 
          })}
        </>
    )
}