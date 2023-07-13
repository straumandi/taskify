import React from 'react'
import './styles.css'
import { Todo } from '../model';

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo) => (
            <li>{ todo.text }</li>
        ))}
    </div>
  )
}

export default TodoList;