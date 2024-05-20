import { schema } from "~shared/services/db";

export type UserModel = Readonly<Omit<schema.UnsafeUser, "emailVerified">>;
