import React, {useState, useEffect} from 'react'
import { TodoList } from './TodoList';
import { Todo } from './types'
import { AddNewTodo } from './AddNewTodo';


let todos: Todo[] = [ 
    { title: 'First to do', id: 1 },
    { title: 'Second to do', id: 2 },
    { title: 'Third to do', id: 3 }
]
export const Home: React.FC = () => {
    const [todosList, setTodosList] = useState<Todo[]>(todos);
    const [nextId, setNextId] = useState<number>(todosList.length + 1);
  
    function addNewTodo(title: string) {
      const newTodo = {
        title,
        id: nextId,
      };
      setNextId((prevId) => prevId + 1); 
      setTodosList([...todosList, newTodo]);
    }

    function handleDeleteTodo(id: number){
        const updatedList = todosList.filter(todo => {
            return todo.id !== id
        })
        setTodosList([...updatedList]);
        setNextId((prevId) => prevId - 1); 
    }

    return (
      <div>
        <h1>TO DO LIST CHALLENGE</h1>
        <TodoList todolist={todosList} handleDeleteTodo={handleDeleteTodo} />
        <AddNewTodo addNewTodo={addNewTodo} />
      </div>
    );
  }
  