import React from 'react'
import AddTodo from './AddTodo'

const ShowTodo = ({title,status,id ,handleStatus}) => {
    
  return (
    <div>
    <h1>{title} - {status ? "Completed" : "Not Completed"} <button onClick={handleStatus}>{status ? " Not Completed" : " Completed"}</button> <button>Delete</button> </h1>
    </div>
  )
}

export default ShowTodo;