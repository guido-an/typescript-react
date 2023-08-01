import React from 'react'
import { Todo } from './types'

interface DeleteTodoProps {
    handleDeleteTodo: Function,
    todo: Todo
}

export const DeleteTodo: React.FC<DeleteTodoProps> = ({todo, handleDeleteTodo}) => {
    return (
        <div>
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete me</button>
        </div>
    )
}