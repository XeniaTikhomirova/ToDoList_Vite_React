import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState({ name: "", isDone: false });
  const [msg, setMsg] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    if (task.name.trim() === "") {
      alert("Schreib eine Aufgabe rein!");
      return;
    }

    if (tasks.length > 0 && tasks.some((t) => t.name === task.name)) {
      setMsg(`"${task.name}" wurde schon hinzugefügt!`);
    } else {
      setTasks([...tasks, task]);
      setTask({ name: "", isDone: false });
      setMsg("");
    }
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.formcontainer}>
          <input
            className={styles.todoinput}
            onChange={(evt) =>
              setTask({ name: evt.target.value, isDone: false })
            }
            type="text"
            value={task.name}
            placeholder="Füge hier deine Aufgabe hinzu..."
          />
          <button className={styles.todobtn} type="submit">
            Addieren
          </button>
        </div>
      </form>
      <h1 className={styles.msg}>{msg}</h1>
    </div>
  );
}
