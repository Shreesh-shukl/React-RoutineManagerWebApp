import React from 'react'
import {Todo} from "../Mycomponents/Todo";


export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className='text-center my-3'>ReactItwithme</h3>
      {props.todos.length===0? "No Todos to display":
      props.todos.map((todo)=>{
          return       <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>

      })}
    
    </div>
  )
}
