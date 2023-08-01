import React, { useState } from 'react'

interface AddNewTodoProps {
    addNewTodo: (title: string) => void; // Update the type to accept a string argument
}


export const AddNewTodo: React.FC<AddNewTodoProps> = ({ addNewTodo }) => {
    const [title, setTitle] = useState<string>('')

    const handleClick = () => {
        addNewTodo(title); // Call the addNewTodo function with the title as an argument
        setTitle(''); // Clear the input field after adding the new todo
      };
      
    return(
        <div>
            <h2>Add new todo</h2>
            <input onChange={(e) => setTitle(e.target.value)} value={title}  />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}