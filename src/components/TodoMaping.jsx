import CreateTodo from "./CreateTodo";
import styles from "./todomaping.module.css";

export default function TodoMaping({ tasks, setTasks }) {
  return (
    <div className={styles.list}>
      {tasks.map((item) => (
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