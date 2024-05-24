import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { Company } from "../models/company.model.ts";
import { User } from "../models/user.model.ts";

export const defaultRouter = new Router().get("/", async ({ response }) => {
  try {
    console.log(await Company.all());
    console.log(await User.all());
  } catch (error) {
    console.log("🚀 ~ router ~ error:", error);
  }

  response.body = "Stockeo API build with deno !!";
});
