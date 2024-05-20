import * as schema from "./schema";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";
import { envs } from "~shared/config/envs";

const url = envs.TURSO_DATABASE_URL;

const client = createClient({
  url: url,
  authToken: envs.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });

export type Db = typeof db;
