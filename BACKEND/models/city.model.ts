import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";
import { db } from "../configs/db.ts";

export class City extends Model {
  static table = "cities";
  static timestamps = true;

  static fields = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  };
}

// call this to sync database
db.link([City]);

// await db.sync({ drop: true });
