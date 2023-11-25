import { router } from "./routes.ts";
import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;

console.log(`Deno server running on port ${port}`);

await app.listen({ port });
