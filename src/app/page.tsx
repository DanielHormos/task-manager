import { fetchTasksAction } from "@/features/tasks/action";
import { TaskCard } from "@/features/tasks/task-card";
import ResetTasksButton from "@/features/tasks/ResetTasksButton";
import ResetDailyTasksButton from "@/features/tasks/ResetDailyTasksButton";
import ResetWeeklyTasksButton from "@/features/tasks/ResetWeeklyTasksButton";
import ResetMonthlyTasksButton from "@/features/tasks/ResetMonthlyTasksButton";

export default async function Home() {
  const tasks = await fetchTasksAction();

  const dailyTasks = tasks.filter((task) => task.frequency === "daily");
  const weeklyTasks = tasks.filter((task) => task.frequency === "weekly");
  const monthlyTasks = tasks.filter((task) => task.frequency === "monthly");

  return (
    <div className="flex flex-col w-full h-screen bg-gray-100">
      <ResetTasksButton />
      <h1 className="text-3xl font-bold text-center mt-1 mb-4">Tasks</h1>
      <div className="flex-1 overflow-y-auto w-full px-4">
        <div className="flex gap-10 justify-center pb-16">
          <section>
            <h2 className="text-2xl font-bold text-center mb-4">Daily</h2>
            <div className="flex justify-center mb-4">
              <ResetDailyTasksButton />
            </div>
            <TaskCard tasks={dailyTasks} />
          </section>
          <section>
            <h2 className="text-2xl font-bold text-center mb-4">Weekly</h2>
            <div className="flex justify-center mb-4">
              <ResetWeeklyTasksButton />
            </div>
            <TaskCard tasks={weeklyTasks} />
          </section>
          <section>
            <h2 className="text-2xl font-bold text-center mb-4">Monthly</h2>
            <div className="flex justify-center mb-4">
              <ResetMonthlyTasksButton />
            </div>
            <TaskCard tasks={monthlyTasks} />
          </section>
        </div>
      </div>
    </div>
  );
}
