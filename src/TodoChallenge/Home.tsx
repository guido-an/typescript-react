import React, {useState, useEffect} from 'react'
import { TodoList } from './TodoList';
import { Todo } from './types'
import { AddNewTodo } from './AddNewTodo';


export const Home: React.FC = () => {
  const savedTodosList = localStorage.getItem("todosList");
  const todosListInStorage = savedTodosList ? JSON.parse(savedTodosList) : [];
    
    const [todosList, setTodosList] = useState<Todo[]>(todosListInStorage);
    const [nextId, setNextId] = useState<number>(todosList.length + 1);

    useEffect(() => {
      localStorage.setItem("todosList", JSON.stringify(todosList));
      console.log(todosList, 'rendering')
     }, [todosList])

     useEffect(() => {

     }, [])
  
    function addNewTodo(title: string) {
      const newTodo = {
        title,
        id: nextId,
        completed: false
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

    function handleCompleted(todoId: number){
      const savedTodosList = localStorage.getItem("todosList");
      const myList = JSON.parse(savedTodosList!);   
      const myTodo =  myList[todoId - 1]
      myTodo.completed = !myTodo.completed
      localStorage.setItem("todosList", JSON.stringify(myList));
      setTodosList([...myList]);

  }

    return (
      <div>
        <h1>TO DO LIST CHALLENGE</h1>
        <TodoList todolist={todosList} handleDeleteTodo={handleDeleteTodo} handleCompleted={handleCompleted} />
        <AddNewTodo addNewTodo={addNewTodo} />
      </div>
    );
  }
  