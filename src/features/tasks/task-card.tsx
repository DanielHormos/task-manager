import { createFeature } from "./feature";

export async function TaskCard() {
  const tasks = await createFeature().fetchTasks();

  return (
    <div>
      {tasks.map((todo) => (
        <div key={todo.id}>
          <div>{todo.task}</div>
          <div>{todo.frequence}</div>
        </div>
      ))}
    </div>
  );
}
