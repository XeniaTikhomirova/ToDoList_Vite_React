import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.formcontainer}>
        <input
          className={styles.todoinput}
          onChange={(evt) => setTask(evt.target.value)}
          type="text"
          value={task}
          placeholder="Füge hier deine Aufgabe hinzu..."
        />
        <button className={styles.todobtn} type="submit">
          Addieren
        </button>
      </div>
    </form>
  );
}
