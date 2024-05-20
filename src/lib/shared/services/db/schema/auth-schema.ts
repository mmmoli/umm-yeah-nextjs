import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
});

export const session = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  expiresAt: integer("expires_at").notNull(),
});

export type UnsafeUser = InferSelectModel<typeof user>;
export type User = Omit<UnsafeUser, "email" | "emailVerified">;
export type CreateUser = InferInsertModel<typeof user>;
