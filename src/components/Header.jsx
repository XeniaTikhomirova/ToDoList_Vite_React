import styles from "./header.module.css";

export default function Header() {
  let date = new Date().toLocaleDateString();
  return (
    <div className={styles.header}>
      <h1>Meine ToDo Liste 🗓️</h1>
      <h3>{date}</h3>
    </div>
  )
}
