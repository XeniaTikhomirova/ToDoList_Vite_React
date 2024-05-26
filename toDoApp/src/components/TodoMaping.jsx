import CreateTodo from "./CreateTodo"

export default function TodoMaping({tasks}) {
  return (
     <div>
    {tasks.map((item) => (
      <CreateTodo key={item} item={item} />
    ))}
  </div>
   )
}
