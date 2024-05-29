import styles from "./createtodo.module.css";

export default function CreateTodo({ item, tasks, setTasks }) {
  function handleDelete(item) {
    console.log(`Item for ${item} deleted!`);
    setTasks(
      tasks.filter((task) => {task !== item})
    );
  }

  return (
    <div className={styles.itemlist}>
      <div className={styles.itemlistName}>
        {item}
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
