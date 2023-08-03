import React, { ChangeEvent, useState, FormEvent } from 'react'
import { UserList } from './UserList'
import { UserForm } from './UserForm'
import { User } from './types'


let usersList = [
    {
      id: '1',
      name: 'Guido',
      email: 'email@gmail.com',
    },
    {
      id: '2',
      name: 'Jhonny Beluschi',
      email: 'email@gmail.com',
    }
  ]


export const HomeTSPractice: React.FC = ()=> {
     const [list, setList] = useState<User[]>(usersList)

  function onSubmit(user: User, event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    setList([...list, user])
  }

    return(
        <div>
            <UserList usersList={list} />
            <UserForm onSubmit={onSubmit}/>
        </div>
    )
}