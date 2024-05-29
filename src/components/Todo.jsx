import Form from "./Form";
import TodoMaping from "./TodoMaping";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TodoMaping tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}
