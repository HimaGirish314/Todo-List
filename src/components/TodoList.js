import React from 'react'

const TodoList = ({todos,setTodos}) => {
  return (
        <div className="displayTodo">
            { 
              todos.map((data ,ind)=>{
                return (
                  <div key={ind}>
                  <h3>{data.name}</h3>
                  </div>
                )
              })
            }
        </div>
  )
}

export default TodoList