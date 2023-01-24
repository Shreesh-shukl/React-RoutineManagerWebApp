import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import {Todos} from "./Mycomponents/Todos";
import React, { useState } from 'react';
import {AddTodo} from "./Mycomponents/AddTodo";


function App() {
  const onDelete=(todo)=>{
    console.log("i am ondelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno = todos[todos.length-1].sno+1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }


  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"go to the mall",
      desc:"write it"
    },
    {
      sno:2,
      title:"go to the gao",
      desc:"write it neat"
    },
    {
      sno:3,
      title:"go to the gym",
      desc:"write it well"
    }
  ]);
  return (
    <>
      <Header title="ReactIt" searchBar={true}/>
      
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      
      <Footer/>
      
    </>
  );
}

export default App;