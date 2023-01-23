import React,{useState} from 'react';
import TodoList from './TodoList';

const Todo = () => {
const [inputTodo,setInputTodo]=useState('')
const [editTodo,setEditTodo]=useState('')
const [todos,setTodos]=useState([])

console.log(editTodo)
const handleSubmit=(e)=>{
    e.preventDefault()
    if(todos.includes(editTodo)){
        editTodo.name=inputTodo
        setEditTodo('')
        setInputTodo('');
        return 
    }
    else{
    setTodos([...todos,{id:todos.length+1,name:inputTodo}])
    setInputTodo('')
    }
    
}
const handleDelete=(data)=>{
    setTodos(todos.filter((res)=>{
    return res.id !== data.id
 }))
}
const handleEdit=(data)=>{
    setEditTodo(data)
    setInputTodo(data.name)
}
  return (
    <div className="container">
        <div className="inputData">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Here....' value={inputTodo} onChange={(e)=>{setInputTodo(e.target.value)}}/>
            <button type='submit'>{editTodo ?"Update" :"Add"}</button>
            </form>
        </div>
        <TodoList  todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}

export default Todo