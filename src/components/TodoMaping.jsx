import CreateTodo from "./CreateTodo";
import styles from "./todomaping.module.css";

export default function TodoMaping({ tasks, setTasks }) {
  const listSorted = tasks.slice().sort((a, b) => (Number(a.isDone) - Number(b.isDone)));

  return (
    <div className={styles.list}>
      {listSorted.map((item) => (
        <CreateTodo
          key={item.name}
          item={item}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}
