import { fetchTasksAction } from "@/features/tasks/action";
import { TaskCard } from "@/features/tasks/task-card";

export default async function Home() {
  const tasks = await fetchTasksAction();

  const dailyTasks = tasks.filter((task) => task.frequency === "daily");
  const weeklyTasks = tasks.filter((task) => task.frequency === "weekly");
  const monthlyTasks = tasks.filter((task) => task.frequency === "monthly");

  return (
    <div className=" flex flex-col  w-full h-screen pt-8 items-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-16">Tasks</h1>
      <div className="flex gap-20">
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Daily</h2>
          <TaskCard tasks={dailyTasks} />
        </section>
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Weekly</h2>
          <TaskCard tasks={weeklyTasks} />
        </section>
        <section>
          <h2 className="text-2xl font-bold text-center mb-4">Monthly</h2>
          <TaskCard tasks={monthlyTasks} />
        </section>
      </div>
    </div>
  );
}
