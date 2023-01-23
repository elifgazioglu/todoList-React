import React, { } from "react";
import {  } from "reactstrap";
import '../App.css'


const Todo = (props) => {
  return (
    <button id="btn-todo">
      {props.todo.name}
    </button>
  );
};

export default Todo;
