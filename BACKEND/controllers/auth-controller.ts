import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { AuthService } from "../services/auth.service.ts";

export const AuthController = {
  login: async ({ request, response }: Context) => {
    try {
      const body = await request.body().value;
      const accessToken = await AuthService.login(body);
      response.body = {
        accessToken,
      };
    } catch (error) {
      response.status = 404;
      response.body = error.message;
    }
  },
};
