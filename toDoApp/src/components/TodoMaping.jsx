import CreateTodo from "./CreateTodo";
import styles  from "./todomaping.module.css";

export default function TodoMaping({ tasks }) {
  return (
    <div className={styles.list}>
      {tasks.map((item) => (
        <CreateTodo key={item} item={item} />
      ))}
    </div>
  );
}
