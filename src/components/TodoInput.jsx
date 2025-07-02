import React, { useState } from "react";

function TodoInput({ setTodos }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmedValue, completed: false },
    ]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default TodoInput;
