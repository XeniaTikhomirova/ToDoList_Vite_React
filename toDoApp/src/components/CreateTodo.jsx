import styles from "./createtodo.module.css"

export default function CreateTodo({ item }){
   return <h4 className={styles.header}>{item}</h4>
}