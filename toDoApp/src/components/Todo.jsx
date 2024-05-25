import { useState } from "react";
import CreateTodo from "./CreateTodo";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(evt) => setTask(evt.target.value)}
          type="text"
          value={task}
        />
        <button type="submit">Add</button>
      </form>

      {tasks.map((item) => (
        <CreateTodo key={item} item={item}/>
      ))}
    </div>
  );
}
