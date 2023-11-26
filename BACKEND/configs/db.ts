import { config } from "./env.ts";
import { connect } from "npm:@planetscale/database@^1.4";

console.log("🚀 ~ file: db.ts:2 ~ config:", config);

const connexion = {
  database: config.db.name,
  host: config.db.host,
  username: config.db.username,
  password: config.db.password,
};

export const db = connect(connexion);
