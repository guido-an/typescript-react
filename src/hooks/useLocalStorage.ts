// useCounter.ts
import { useEffect, useState } from 'react'
import { Todo } from '../TodoChallenge/types'

export const useLocalStorageTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const savedTodosList = localStorage.getItem('todosList')
        const todosListInStorage = savedTodosList ? JSON.parse(savedTodosList) : [];
        setTodos(todosListInStorage);
    }, [])

    return todos;

}