import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [Todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([...Todos, { id: Date.now(), text: todo, isDone: false }]);
      setTodo("");
    } else {
      alert("Please add a task");
    }
  };
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>{" "}
      {/* write shortcut 'span.heading' to create span element with class of heading */}
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      ></InputField>
      {Todos.map((todo) => (<li>{todo.text}</li>))}
      <TodoList todos={Todos} setTodos={setTodos}></TodoList>
    </div>
  );
};

export default App;
