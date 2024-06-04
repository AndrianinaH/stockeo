import { Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { AuthController } from "../controllers/auth-controller.ts";
import { AuthGuardMiddleware } from "../middlewares/auth-guard-middleware.ts";

export const authRouter = new Router()
  // AUTH and User
  .post("/auth/login", AuthController.login)

  // Secured routes using AuthGuard
  .get("/user/:id", AuthGuardMiddleware, (context) => {
    context.response.body = "Validate user ok";
  });
