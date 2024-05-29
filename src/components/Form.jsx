import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState({ name: "", isDone: false });

  function handleSubmit(evt) {
    evt.preventDefault();
    setTasks([...tasks, task]);
    setTask({ name: "", isDone: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.formcontainer}>
        <input
          className={styles.todoinput}
          onChange={(evt) => setTask({ name: evt.target.value, isDone: false })}
          type="text"
          value={task.name}
          placeholder="Füge hier deine Aufgabe hinzu..."
        />
        <button className={styles.todobtn} type="submit">
          Addieren
        </button>
      </div>
    </form>
  )
}
