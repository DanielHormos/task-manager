import { tasksTable } from "./schema";

export type TaskInsert = typeof tasksTable.$inferInsert;
