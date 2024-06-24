import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <ul>
        <li>
          <input
            type="text"
            placeholder="Add new task..."
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter" && inputValue.length > 0) {
                setTodos(
                  todos.concat(
                    inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
                  )
                );
                setInputValue("");
              }
            }}
            value={inputValue}
          />
        </li>
        {todos.map((todo, index) => (
          <li>
            {todo}{" "}
            <FaTrash
              /* Eliminar list item al hacer click sobre el icono */
              onClick={() =>
                setTodos(todos.filter((todo, todoIndex) => index != todoIndex))
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
