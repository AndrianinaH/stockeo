import { initRoutes } from "./routes.ts";
import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
initRoutes(app);
const port = 8000;
console.log(`🚀 Server running on port ${port} 🦕`);

await app.listen({ port });
