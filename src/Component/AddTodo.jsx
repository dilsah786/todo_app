import React from "react";
import ShowTodo from "./ShowTodo";
import { useState } from "react";

const AddTodo = () => {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState(false);
  function handleInputVal(e) {
    setInputVal(e.target.value);
  }
  // console.log(inputVal);

  function handleTodoList() {
    const newTodo = {
      title: inputVal,
      status: false,
      id: Date.now() + inputVal,
    };
  
    setTodoList([...todoList, newTodo]);

  }
  console.log(todoList);


  function handleStatus(id){
    console.log(id);

   const newTodoWithId= todoList.map((elem)=>{
      if(elem.id===id){
        return {...elem , status: !elem.status}
      }else{
        return elem;
      }
    });
      setTodoList(newTodoWithId)
   }
   

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo Task"
        onChange={handleInputVal}
      />
      <button onClick={handleTodoList}>Add Todo</button>
      {todoList.map((task) => {
        return <ShowTodo key={task.id} {...task} handleStatus={()=>handleStatus(task.id)} />;
      })}
    </div>
  );
};

export default AddTodo;
