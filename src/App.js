import "./App.css";
import {} from "reactstrap";
import Todo from "./components/Todos";
import { useState } from "react";

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
          id="btn"
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
          <Todo todo={todo}> </Todo>
        ))}
        </div>
    </div>
  );
}

export default App;
