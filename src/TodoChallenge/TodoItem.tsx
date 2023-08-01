import React, { useState, useEffect } from 'react'
import { Todo } from './types'
import { DeleteTodo } from './DeleteTodo'
import { Completed } from './Completed'

interface TodoProps{
    todo: Todo,
    handleDeleteTodo: Function,
    handleCompleted: Function
}

const style = {
    margin: '0.5rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '50%'
}

export const TodoItem: React.FC<TodoProps> = ({ todo, handleDeleteTodo, handleCompleted }) => {
     return(
        <div style={style}>
         <div>
            <span>{todo.id}) </span>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</span> 
         </div>
         <DeleteTodo todo={todo} handleDeleteTodo={handleDeleteTodo}/>
         <Completed todoId={todo.id} handleCompleted={handleCompleted}/>
        </div>
     )
}