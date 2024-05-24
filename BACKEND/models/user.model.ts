import {
  DataTypes,
  Model,
  Relationships,
} from "https://deno.land/x/denodb/mod.ts";
import { db } from "../configs/db.ts";
import { ModelFields } from "https://deno.land/x/denodb@v1.4.0/lib/model.ts";
import { roles } from "../configs/roles.ts";
import { Company } from "./company.model.ts";

export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields: ModelFields = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    role: DataTypes.enum(roles),
    password: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
  };

  static company() {
    return this.hasOne(Company);
  }
}
Relationships.belongsTo(User, Company);

// call this to sync database
db.link([Company, User]);

// await db.sync({ drop: true });
