import styles from "./createtodo.module.css";

export default function CreateTodo({ item }) {
  return (
    <div className={styles.itemlist}>
      <div className={styles.itemlistName}>{item}</div>
      <hr className={styles.line} />
    </div>
  );
}
