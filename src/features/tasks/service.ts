import { TaskInsert } from "@/db/types";
import { Db } from "@/index";
import { createRepository } from "./repository";

export function createService(db: Db) {
  const repository = createRepository(db);
  return {
    async fetchTasks() {
      return await repository.fetchTasks();
    },
    async postTask(task: TaskInsert) {
      return await repository.postTask(task);
    },
    async deleteTask(id: number) {
      return await repository.deleteTask(id);
    },
    async completeTask(id: number, completer: string) {
      return await repository.completeTask(id, completer);
    },
    async resetTasks() {
      return await repository.resetTasks();
    },
    async resetDailyTasks() {
      return await repository.resetDailyTasks();
    },
    async resetWeeklyTasks() {
      return await repository.resetWeeklyTasks();
    },
    async resetMonthlyTasks() {
      return await repository.resetMonthlyTasks();
    },
  };
}
