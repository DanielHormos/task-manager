import { tasksTable } from "@/db/schema";
import { db } from "@/index";

export function createRepository() {
  return {
    async fetchTasks() {
      return await db.select().from(tasksTable);
    },
  };
}
