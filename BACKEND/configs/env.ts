import { config as configEnv } from "https://deno.land/x/dotenv/mod.ts";
await configEnv({ export: true });

export const config = {
  db: {
    name: Deno.env.get("DB_NAME"),
    host: Deno.env.get("DB_HOST"),
    port: Deno.env.get("DB_PORT"),
    username: Deno.env.get("DB_USERNAME"),
    password: Deno.env.get("DB_PASSWORD"),
    url: Deno.env.get("DATABASE_URL"),
  },
  jwt: {
    secret: Deno.env.get("JWT_SECRET"),
  },
};
