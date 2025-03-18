"use client";
import { useState } from "react";

interface Props {
  addTodo: (text: string) => void;
}

export default function AddTodo({ addTodo }: Props) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText(""); // Clear input field after adding
    }
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task..."
      />
      {/* <button onClick={() => text && addTodo(text)}>➕ Add</button> */}
      <button onClick={handleAdd}>➕ Add</button>
    </div>
  );
}
