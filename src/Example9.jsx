import React, { useState, useOptimistic } from "react";

export default function Example9() {
  const [todos, setTodos] = useState([]);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (prev, newTodo) => [...prev, newTodo]
  );

  const addTodo = async (formData) => {
    const newTodo = { id: Date.now(), text: formData.get("todo"), done: false };

    // Optimistic update
    addOptimisticTodo(newTodo);

    // Simulate server delay
    await new Promise((res) => setTimeout(res, 1000));
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <form action={addTodo}>
      <input name="todo" />
      <button type="submit">Add</button>

      <ul>
        {optimisticTodos.map((t) => (
          <li key={t.id}>{t.text}</li>
        ))}
      </ul>
    </form>
  );
}
