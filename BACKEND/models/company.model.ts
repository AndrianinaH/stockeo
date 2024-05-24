import { DataTypes, Model } from "https://deno.land/x/denodb/mod.ts";
import { db } from "../configs/db.ts";
import { ModelFields } from "https://deno.land/x/denodb@v1.4.0/lib/model.ts";

export class Company extends Model {
  static table = "companies";
  static timestamps = true;

  static fields: ModelFields = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    useQuantity: DataTypes.BOOLEAN,
    useImages: DataTypes.BOOLEAN,
    useRef: DataTypes.BOOLEAN,
  };
}
