import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db, schema } from "../db";
import { providers } from "./providers";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers,
});

declare module "next-auth" {
  interface Session {
    user: Omit<schema.UnsafeUser, "emailVerified">;
  }
}
