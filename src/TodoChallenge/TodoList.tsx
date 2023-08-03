import React from 'react'
import { Todo } from './types';
import { TodoItem } from './TodoItem';

interface TodoListProps {
    todolist: Todo[],
    handleDeleteTodo: (id: number) => void,
    handleCompleted: (todoId: number) => void
}

const displayList = (array: Todo[], handleDeleteTodo: Function, handleCompleted: Function) => {
    return array.map(todo => {
        return <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleCompleted={handleCompleted}/>
    })
}

export const TodoList: React.FC<TodoListProps> = ({ todolist, handleDeleteTodo, handleCompleted }) => {  
    return (
        <>{displayList(todolist, handleDeleteTodo, handleCompleted)}</>
    )
}