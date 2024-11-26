"use server";
import { TaskInsert } from "@/db/types";
import { featureService } from "./instance";

export async function postTaskAction(data: FormData) {
  const task = data.get("task") as string;
  const frequency = data.get("frequency") as string;
  const startDay = data.get("start-day") as string;
  const taskToPost: TaskInsert = { task, frequency, startDay };
  await featureService.postTask(taskToPost);
}

export async function fetchTasksAction() {
  return await featureService.fetchTasks();
}
