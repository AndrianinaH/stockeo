import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { AuthService } from "../services/auth.service.ts";

export const AuthController = {
  login: async ({ request, response }: Context) => {
    const body = await request.body().value;
    const accessToken = await AuthService.login(body);
    response.body = {
      accessToken,
    };
  },
};
