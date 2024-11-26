import { fetchTasksAction } from "./action";

export async function TaskCard() {
  const tasks = await fetchTasksAction();

  return (
    <div>
      {tasks.map((todo) => (
        <div key={todo.id}>
          <div>{todo.task}</div>
          <div>{todo.frequency}</div>
        </div>
      ))}
    </div>
  );
}
