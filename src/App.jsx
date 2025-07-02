import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <TodoInput setTodos={setTodos} />
        </header>

        <section className="main">
          <TodoList todos={todos} setTodos={setTodos} />
        </section>

        <Footer todos={todos} setTodos={setTodos} />
      </section>
      
    </>
  );
}

export default App;
