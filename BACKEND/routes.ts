import { Application } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { defaultRouter } from "./routes/default.router.ts";
import { authRouter } from "./routes/auth.router.ts";

export const initRoutes = (app: Application) => {
  app.use(oakCors({ origin: "*" }));

  // default router
  app.use(defaultRouter.routes());
  app.use(defaultRouter.allowedMethods());

  // Auth router
  app.use(authRouter.routes());
  app.use(authRouter.allowedMethods());
};
