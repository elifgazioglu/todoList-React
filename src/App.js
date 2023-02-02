import "./App.css";
import {} from "reactstrap";
import Todo from "./components/Todos";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrCheckbox } from "react-icons/gr";

function App() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  function addToTodos(y) {
    if(message == ""){alert("lutfen bir todo girin"); return;}
    const x = [...todos, { id: todos.length + 1, name: y }];
    setTodos(x);
    saveTodosToLocalStorage();
  }

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function clearInput() {
    setMessage("");
  }

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage();
  };

  function saveTodosToLocalStorage(){
    try{
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    catch (error){
      console.log(error);
    }
  }

  useEffect(() => {
    const unparsedTodosFromLocalStorage = localStorage.getItem('todos')
    const parsedTodosFromLocalStorage = JSON.parse(unparsedTodosFromLocalStorage)
    setTodos(parsedTodosFromLocalStorage)
}, []);

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

            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              <AiFillDelete></AiFillDelete>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
