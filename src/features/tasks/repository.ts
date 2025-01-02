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
    async completeTask(id: number, completer: string) {
      return await db
        .update(tasksTable)
        .set({ completed: "true", completer })
        .where(eq(tasksTable.id, id));
    },

    async resetTasks() {
      return await db
        .update(tasksTable)
        .set({ completed: "false", completer: "" });
    },
    async resetDailyTasks() {
      return await db
        .update(tasksTable)
        .set({ completed: "false", completer: "" })
        .where(eq(tasksTable.frequency, "daily"));
    },
    async resetWeeklyTasks() {
      return await db
        .update(tasksTable)
        .set({ completed: "false", completer: "" })
        .where(eq(tasksTable.frequency, "weekly"));
    },
    async resetMonthlyTasks() {
      return await db
        .update(tasksTable)
        .set({ completed: "false", completer: "" })
        .where(eq(tasksTable.frequency, "monthly"));
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
