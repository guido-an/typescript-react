import React from 'react'
import { Todo } from './types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todolist: Todo[],
    handleDeleteTodo: Function
}

const displayList = (array: Todo[], handleDeleteTodo: Function) => {
    return array.map(todo => {
        return <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}/>
    })
}

export const TodoList: React.FC<TodoListProps> = ({ todolist, handleDeleteTodo }) => {  
    return (
        <>{displayList(todolist, handleDeleteTodo)}</>
    )
}