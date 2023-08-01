import React, { useState } from 'react'
import { Todo } from './types'
import { DeleteTodo } from './DeleteTodo'
import { Completed } from './Completed'

interface TodoProps{
    todo: Todo,
    handleDeleteTodo: Function
}

const style = {
    margin: '0.5rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%'
}
export const TodoItem: React.FC<TodoProps> = ({ todo, handleDeleteTodo }) => {
    const [completed, setCompleted] = useState<boolean>(false)

     return(
        <div style={style}>
         <div>
            <span>{todo.id}) </span>
            <span style={{ textDecoration: completed ? 'line-through' : 'none'}}>{todo.title}</span> 
         </div>
         <DeleteTodo todo={todo} handleDeleteTodo={handleDeleteTodo}/>
         <Completed setCompleted={setCompleted} completed={completed}/>
        </div>
     )
}