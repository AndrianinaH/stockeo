import { config as configEnv } from "https://deno.land/x/dotenv/mod.ts";
await configEnv({ export: true });

export const config = {
  db: {
    url: Deno.env.get("TURSO_DB_URL"),
    authToken: Deno.env.get("TURSO_DB_TOKEN"),
  },
};
