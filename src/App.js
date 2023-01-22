import "./App.css";
import {} from "reactstrap";
import Todo from "./components/Todos";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  function addToTodos(y) {
    const x = [...todos, y];
    setTodos(x);
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function clearInput() {
    setMessage("");
  }

  function todoSelected() {
    <GrCheckboxSelected></GrCheckboxSelected>;
  }

  return (
    <div id="container">
      <h1 id="my-todo-list">My Todo List</h1>
      <div id="container-input">
        <input
          id="input"
          type="text"
          placeholder="Your Todos"
          onChange={handleChange}
          value={message}
        ></input>
        <button
          id="btn-add"
          type="submit"
          onClick={(event) => {
            addToTodos(message);
            clearInput();
            event.preventDefault();
          }}
        >
          Ekle
        </button>
      </div>
      <div id="todo-list">
        {todos.map((todo) => (
          <div className="todo-item">
            <button className="check-btn">
              <GrCheckbox></GrCheckbox>
            </button>

            <Todo todo={todo}></Todo>
            <button id="delete-btn">
              {" "}
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
