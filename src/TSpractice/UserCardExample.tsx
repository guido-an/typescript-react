import React from 'react'

// Enum types
enum UserRole {
    Admin = "admin",
    User = "user"
}

interface Address {
    street: string,
    city: string
}

interface User {
    name: string,
    age: number | string, // Union types
    email: string,
    partner?: string,
    role?: UserRole
}

// Intersection types
type UserWithAddress = User & Address

// const user: UserWithAddress = {
//     name:'Guido',
//     age: 30,
//     email: 'email@email.com',
//     role: UserRole.User,
//     street: 'My street 123',
//     city: 'Ancona'
// }

// Using generic and assigning the User when passing the props
interface UserCardProps<T> {
    user: T,
    onButtonCLick?: () => void // Function props
}

// Type assertions: to tell ts we know the type of the external user (maybe coming from an API)
const externalUser: any = { name: 'Jane Doe', age: 25, email: 'jane@example.com' };


const UserCard: React.FC<UserCardProps<UserWithAddress>> = ({ user }) => {
    // Use 'N/A' as the default value if age is not provided
    const age = user.age || 'N/A'

    const externalUserTyped = externalUser as User;


    return (
        <div>
            <h2>User Card</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default UserCard;

