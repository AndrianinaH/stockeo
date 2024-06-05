import { Context, RouterContext } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { AuthService } from "../services/auth.service.ts";
import { logger } from "../utils/logger.ts";
import { jwtDecode } from "../utils/jwt.ts";
import { getBearerToken } from "../utils/bearer.util.ts";

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
      logger.error("login failed", { error });
      response.status = 404;
      response.body = error.message;
    }
  },

  getMe: async ({ request, response }: Context) => {
    try {
      // get payload by decrypting acessToken
      const token = getBearerToken(request);
      const jwtPayload = await jwtDecode(token || "");
      const { userId } = JSON.parse(jwtPayload);

      // deno-lint-ignore no-unused-vars
      const { password, ...user } = await AuthService.getUserById(userId);
      logger.info("getMe success", { userId });
      response.body = {
        user,
      };
    } catch (error) {
      logger.error("getMe failed", { error });
      response.status = 404;
      response.body = error.message;
    }
  },

  getUser: async ({ params, response }: RouterContext<"/users/:id">) => {
    try {
      const id = params.id;
      // deno-lint-ignore no-unused-vars
      const { password, ...user } = await AuthService.getUserById(+id);
      logger.info("get user success", { userId: id });
      response.body = {
        user,
      };
    } catch (error) {
      logger.error("get user failed", { error });
      response.status = 404;
      response.body = error.message;
    }
  },

  getUserCompany: async ({
    params,
    response,
  }: RouterContext<"/users/:id/company">) => {
    try {
      const id = params.id;
      const company = await AuthService.getUserCompanyByUserId(+id);
      logger.info("get user company success", { userId: id });
      response.body = {
        company,
      };
    } catch (error) {
      logger.error("get user company failed", { error });
      response.status = 404;
      response.body = error.message;
    }
  },
};
