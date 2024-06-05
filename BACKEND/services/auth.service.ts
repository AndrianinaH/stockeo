import { User } from "../models/user.model.ts";
import { confirmPassword } from "../utils/bcrypt.ts";
import { jwtGenerate } from "../utils/jwt.ts";

export const AuthService = {
  login: async (data: { email: string; password: string }) => {
    const user = await User.where({
      email: data.email,
      isActive: true,
    }).first();
    if (!user) {
      throw new Error("User not found");
    }
    // confirm password throw error if not correct
    confirmPassword(data.password, user.password as string);

    const jwtToken = await jwtGenerate(
      JSON.stringify({
        userId: user.id,
      }),
    );
    return jwtToken;
  },

  getUserById: async (userId: number) => {
    const user = await User.where({ id: userId, isActive: true }).first();
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  },

  getUserCompanyByUserId: async (userId: number) => {
    const company = await User.where({ id: userId, isActive: true }).company();
    if (!company) {
      throw new Error("User company not found");
    }
    return company;
  },
};
