import { db } from "./configs/db.ts";
import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const router = new Router().get("/", async ({ response }) => {
  // console.log(await db.ping());
  const results = await db.execute("show databases");
  console.log(results);

  response.body = "Stockeo API build with deno !!";
});

// AUTH and User
//   .post("/login", async (ctx) => {})
//   .get("/user/:id", async (context) => {});
