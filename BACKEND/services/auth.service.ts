import { jwtGenerate } from "../utils/jwt.ts";

export const AuthService = {
  login: async (data: { email: string; password: string }) => {
    const jwtToken = await jwtGenerate({
      data: "login success",
    });
    return jwtToken;
  },

  validateToken: () => {},
};
