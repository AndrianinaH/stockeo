import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { City } from "./models/City.ts";

export const router = new Router().get("/", async ({ response }) => {
  try {
    await City.create([
      {
        name: "Antsiranana",
      },
      { name: "Diego" },
    ]);
    await City.where("name", "like", "%toa%").update({ name: "tamaga" });
    const cities = await City.all();
    console.log("🚀 ~ router ~ cities:", cities);
  } catch (error) {
    console.log("🚀 ~ router ~ error:", error);
  }

  response.body = "Stockeo API build with deno !!";
});

// AUTH and User
//   .post("/login", async (ctx) => {})
//   .get("/user/:id", async (context) => {});
