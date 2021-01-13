import React from 'react';
import ReactDOM from 'react';
import "./styles.css";

 


function  TodoItem(props){
     
  const finalstyle ={
    textDecoration:"line-through"
}

    return(
      <div className = "todolist">
       
     
       
        <label className="checkboxlabel">
        
        <input type ="checkbox" onChange={()=> props.handleChange(props.items.id)} /> <p style = {props.items.completed ? finalstyle :null}> {props.items.ext} </p>
       
        </label>
    
        
      </div>
    )
    
  }
  export default TodoItem;

