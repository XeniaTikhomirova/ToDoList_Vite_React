import Form from "./Form";
import TodoMaping from "./TodoMaping";
import Footer from "./Footer";
import { useState } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);

  const counterDone = tasks.filter((task) => task.isDone).length;
  const allTasks = tasks.length;

  return (
    <div>
      <Form tasks={tasks} setTasks={setTasks} />
      <TodoMaping tasks={tasks} setTasks={setTasks} />
      <Footer allTasks={allTasks} counterDone={counterDone} />
    </div>
  );
}
