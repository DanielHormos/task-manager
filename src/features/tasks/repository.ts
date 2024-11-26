import { tasksTable } from "@/db/schema";
import { TaskInsert } from "@/db/types";
import { Db } from "@/index";

export function createRepository(db: Db) {
  return {
    async fetchTasks() {
      return await db.select().from(tasksTable);
    },
    async postTask(task: TaskInsert) {
      return await db.insert(tasksTable).values(task);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
