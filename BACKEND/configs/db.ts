import { Database, PostgresConnector } from "https://deno.land/x/denodb/mod.ts";
import { config } from "./env.ts";

const connection = new PostgresConnector({
  host: config.db.host || "",
  username: config.db.username || "",
  password: config.db.password || "",
  database: config.db.name || "",
  port: config.db.port ? +config.db.port : 6543,
});

let dbInstance: Database;
// redeploy

const createDatabaseInstance = (connection: PostgresConnector) => {
  if (!dbInstance) {
    dbInstance = new Database(connection);
  }
  return dbInstance;
};

export const db = createDatabaseInstance(connection);
