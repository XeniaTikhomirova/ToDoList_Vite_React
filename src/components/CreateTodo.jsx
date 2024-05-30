import styles from "./createtodo.module.css";

export default function CreateTodo({ item, tasks, setTasks }) {
  function handleClick(name) {
    console.log(
      tasks.map((task) => {
        task.name === name ? { ...task, isDone: !task.isDone } : task;
      })
    );
  }

  function handleDelete(item) {
    console.log(`Item for ${item.name} deleted!`);
    setTasks(tasks.filter((task) => task.name !== item.name));
  }

  return (
    <div className={styles.itemlist}>
      <div className={styles.itemlistName}>
        <span onClick={() => handleClick(item.name)}>{item.name}</span>

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
