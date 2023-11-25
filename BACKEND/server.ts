import { router } from "./routes.ts";
import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
await config({ export: true });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;

console.log(Deno.env.has("TEST_ENV"));
console.log(`Deno server running on port ${port}`);

await app.listen({ port });
