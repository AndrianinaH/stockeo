import { User } from "../models/user.model.ts";
import { confirmPassword } from "../utils/bcrypt.ts";
import { jwtGenerate } from "../utils/jwt.ts";

export const AuthService = {
  login: async (data: { email: string; password: string }) => {
    const user = await User.where({ email: data.email }).first();
    if (!user) {
      throw new Error("User not found");
    }
    // confirm password throw error if not correct
    await confirmPassword(data.password, user.password as string);

    const jwtToken = await jwtGenerate({
      data: "login success",
    });
    return jwtToken;
  },
};
