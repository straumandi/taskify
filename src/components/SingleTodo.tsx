import React, { useEffect, useRef, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./styles.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setedit] = useState<boolean>(false);
  const [editTodo, seteditTodo] = useState<string>(todo.text);
  const editRef = React.useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault(); // prevent page refresh

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: editTodo } : todo))
    );
    setedit(false);
  };

  useEffect(() => {
    editRef.current?.focus();
  }, [edit]);

  return (
    /* onSubmit get's triggered when user presses enter */
    <form className="todos__single" onSubmit={(e) => {handleEdit(e, todo.id)}}>
      {edit ? (
        <input
          ref={editRef}
          value={editTodo}
          onChange={(e) => seteditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.text}</s>
      ) : (
        <span className="todos__single--text">{todo.text}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit) {
              setedit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
