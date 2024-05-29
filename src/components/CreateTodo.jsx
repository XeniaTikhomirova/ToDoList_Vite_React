import styles from "./createtodo.module.css";

export default function CreateTodo({ item, tasks, setTasks }) {
  function handleDelete(item) {
    console.log(`Item for ${item.name} deleted!`);
    setTasks(tasks.filter((task) => task.name !== item.name));
  }

  return (
    <div className={styles.itemlist}>
      <div className={styles.itemlistName}>
        {item.name}
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
