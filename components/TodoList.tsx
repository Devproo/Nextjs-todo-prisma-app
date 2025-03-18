"use client";

import { Todo } from "@/types/todo";

interface Props {
  todos: Todo[];
  toggleTodo: (id: string) => void; // Changed from number → string
  deleteTodo: (id: string) => void; // Changed from number → string
}

export default function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
          <button onClick={() => toggleTodo(todo.id)}>✅</button>
          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}
