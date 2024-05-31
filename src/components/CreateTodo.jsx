import styles from "./createtodo.module.css";

export default function CreateTodo({ item, tasks, setTasks }) {
  const className = item.isDone ? styles.linedThrough : "";

  function handleClick(name) {
    setTasks(
      tasks.map((task) =>
        task.name === name ? { ...task, isDone: !task.isDone } : task
      )
    );
    console.log(tasks);
    console.log(`${name} has been clicked!`);
  }

  function handleDelete(item) {
    console.log(`Item for ${item.name} deleted!`);
    setTasks(tasks.filter((task) => task.name !== item.name));
  }

  return (
    <div className={styles.itemlist}>
      <div className={styles.itemlistName}>
        <span onClick={() => handleClick(item.name)} className={className}>
          {item.name}
        </span>

        <span>
          <button
            className={styles.buttonItem}
            onClick={() => handleDelete(item)}
          >
            Löschen
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
