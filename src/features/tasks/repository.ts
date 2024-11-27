import { tasksTable } from "@/db/schema";
import { TaskInsert } from "@/db/types";
import { Db } from "@/index";
import { eq } from "drizzle-orm";

export function createRepository(db: Db) {
  return {
    async fetchTasks() {
      return await db.select().from(tasksTable);
    },
    async postTask(task: TaskInsert) {
      return await db.insert(tasksTable).values(task);
    },
    async deleteTask(id: number) {
      return await db.delete(tasksTable).where(eq(tasksTable.id, id));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
