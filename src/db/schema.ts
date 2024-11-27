import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const tasksTable = pgTable("tasks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  task: varchar({ length: 20 }).notNull(),
  frequency: varchar({ length: 8 }).notNull(),
});
