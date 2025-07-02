import React, { useState } from "react";

function Footer({ todos, setTodos }) {
  const [filter, setFilter] = useState("all");

  const remaining = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remaining}</strong> item{remaining !== 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === "all" ? "selected" : ""}
            onClick={() => handleFilterChange("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={filter === "active" ? "selected" : ""}
            onClick={() => handleFilterChange("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={filter === "completed" ? "selected" : ""}
            onClick={() => handleFilterChange("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
