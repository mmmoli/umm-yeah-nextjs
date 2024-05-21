import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const envs = createEnv({
  server: {
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    NODE_ENV: z.enum(["development", "production"]),
    STRIPE_SECRET_KEY: z.string().min(1),
    TURSO_AUTH_TOKEN: z.string(),
    TURSO_DATABASE_URL: z.string().url(),
  },
  shared: {
    NEXT_BASE_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  },
  experimental__runtimeEnv: {
    NEXT_BASE_URL: process.env.NEXT_BASE_URL,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
});
