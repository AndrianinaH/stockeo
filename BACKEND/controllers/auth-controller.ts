import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { AuthService } from "../services/auth.service.ts";
import { logger } from "../utils/logger.ts";

export const AuthController = {
  login: async ({ request, response }: Context) => {
    try {
      const body = await request.body().value;
      const accessToken = await AuthService.login(body);
      logger.info("login success", { user: body.email });
      response.body = {
        accessToken,
      };
    } catch (error) {
      logger.error("login failed", { error: error.message });
      response.status = 404;
      response.body = error.message;
    }
  },
};
