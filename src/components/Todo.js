import React,{useState} from 'react';
import TodoList from './TodoList';

const Todo = () => {
const [inputTodo,setInputTodo]=useState('')
const [todos,setTodos]=useState([])
const handleSubmit=(e)=>{
    e.preventDefault()
    setTodos([...todos,{id:todos.length+1,name:inputTodo}])
    setInputTodo('')
}
const handleDelete=(data)=>{
    setTodos(todos.filter((res)=>{
    return res.id !== data.id
 }))
}
  return (
    <div className="container">
        <div className="inputData">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Here....' value={inputTodo} onChange={(e)=>{setInputTodo(e.target.value)}}/>
            <button type='submit'>Add</button>
            </form>
        </div>
        <TodoList  todos={todos} setTodos={setTodos} handleDelete={handleDelete}/>
    </div>
  )
}

export default Todo