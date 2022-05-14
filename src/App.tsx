import React, { useState, useEffect } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import "./App.css";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const addTodoHandler = async (title: string, content: string) => {
    await fetch("http://localhost:2022/api/v1/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    });
    setIsSubmitted(true);
  };

  const removeTodoHandler = async (id: string) => {
    await fetch(`http://localhost:2022/api/v1/posts/${id}`, {
      method: "DELETE",
    });
    setIsSubmitted(true);
  };

  useEffect(() => {
    const fetchExistedTodos = async () => {
      const response = await fetch("http://localhost:2022/api/v1/posts");
      const responseData = await response.json();
      const loadedTodos = [];

      for (const item of responseData) {
        const { id, title, content, createdAt, updatedAt } = item;
        const todo = new Todo(id, title, content, createdAt, updatedAt);
        loadedTodos.push(todo);
      }

      setTodos(loadedTodos);
      setIsSubmitted(false);
    };

    fetchExistedTodos();
  }, [isSubmitted]);

  return (
    <div className="app">
      <header className="app__header">
        <h3 className="text__heading3">Congrats!</h3>
        <p className="text__normal">
          If you're able to start this app, you just passed the first test on
          version control
        </p>
        <p className="text__normal">
          Right now, we just need you to finish this simple todo list feature.
          😊
        </p>
      </header>
      <NewTodo onAddTodo={addTodoHandler} />
      {/* You should render your todo list down here */}
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
