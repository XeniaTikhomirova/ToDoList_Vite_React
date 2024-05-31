import styles from "./footer.module.css";

export default function Footer({ allTasks, counterDone }) {
  return (
    <div className={styles.footer}>
      <h3 className={styles.finished}>Erledigte Aufgaben: {counterDone}</h3>
      <h3 className={styles.notfinished}>Unerledigte Aufgaben: {allTasks}</h3>
    </div>
  );
}
