import React, { ChangeEvent, useState, FormEvent } from 'react'
import { User } from './types'

interface UserFormProps<T> {
    user?: T,
    onSubmit: (user: User, event: FormEvent<HTMLFormElement>) => void
}

export const UserForm: React.FC<UserFormProps<User>> = ({ onSubmit }) => {
    const [user, setUser] = useState<User>({
        id: '',
        name: '',
        email: '',
      });

      const handleChange =(event: ChangeEvent<HTMLInputElement>) => {
        const {  name, value } = event.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
          }));
      }
    return (
        <form onSubmit={(e) => onSubmit(user, e)}>
            <input name="id" value={user.id} onChange={handleChange}/>
            <input name="name" value={user.name} onChange={handleChange}/>
            <input name="email" value={user.email} onChange={handleChange}/>
            <button type="submit">Add user</button>
        </form>
    )
}