import React from 'react'

const TodoList = ({todos,handleDelete}) => {
  return (
        <div className="displayTodo">
            { todos.length > 0 &&
              todos.map((data ,ind)=>{
                return (
                  <div key={ind}>
                  <h3>{data.name} <button>Edit</button> <button onClick={()=>handleDelete(data)}>Delete</button></h3>
                  </div>
                )
              })
            }
        </div>
  )
}

export default React.memo(TodoList);