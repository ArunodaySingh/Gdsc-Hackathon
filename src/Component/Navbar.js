import { useState } from "react";
import "../Style/Navbar.css";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="center">
      <h1>Rapid2Food Project</h1>
      <ul>
        <li>We are planning to make a payment gaterway on the top of flow</li>
        <li>
          Which will make food ordering, waiting period,receiving and payment
          smooth
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
