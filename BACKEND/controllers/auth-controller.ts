import { Request, Response } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const AuthController = {
  login: (request: Request, response: Response) => {
    console.log(request.body().value);
    response.body = {
      accessToken: "wawawawawawawa",
    };
  },
};
