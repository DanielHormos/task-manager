"use server";
import { TaskInsert } from "@/db/types";
import { featureService } from "./feature";

export async function postTaskAction(data: FormData) {
  const task = data.get("task") as string;
  const frequency = data.get("frequency") as string;
  const taskToPost: TaskInsert = { task, frequency };
  await featureService.postTask(taskToPost);
}

export async function fetchTasksAction() {
  return await featureService.fetchTasks();
}
