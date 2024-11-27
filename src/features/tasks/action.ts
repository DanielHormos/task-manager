"use server";
import { TaskInsert } from "@/db/types";
import { featureService } from "./instance";

export async function postTaskAction(data: FormData) {
  const task = data.get("task") as string;
  const frequency = data.get("frequency") as string;
  const taskToPost: TaskInsert = {
    task,
    frequency,
    completed: "false",
    completer: "",
  };
  await featureService.postTask(taskToPost);
}

export async function completeTaskAction(data: FormData, id: number) {
  const completer = data.get("completer") as string;
  await featureService.completeTask(id, completer);
}

export async function fetchTasksAction() {
  return await featureService.fetchTasks();
}

export async function deleteTaskAction(id: number) {
  await featureService.deleteTask(id);
}
