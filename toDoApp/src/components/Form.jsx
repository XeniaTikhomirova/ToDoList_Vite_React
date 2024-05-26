import { useState } from "react";

export default function Form({tasks, setTasks}) {
  const [task, setTask] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(evt) => setTask(evt.target.value)}
        type="text"
        value={task}
      />
      <button type="submit">Add</button>
    </form>
  );
}
