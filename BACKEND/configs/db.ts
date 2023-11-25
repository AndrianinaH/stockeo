import { config } from "./env.ts";
import drizzle from "https://deno.land/x/drizzle@v0.23.85/postgres.ts";
import { createClient } from "https://esm.sh/@libsql/client@0.4.0-pre.2/web";

const client = createClient({
  url: config.db.url,
  authToken: config.db.authToken,
});

export const db = drizzle(client);
