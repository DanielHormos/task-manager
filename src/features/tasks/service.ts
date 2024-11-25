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
  };
}
