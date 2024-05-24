import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(8);
  return await bcrypt.hash(password, salt);
};

export const confirmPassword = async (
  password: string,
  userPassword: string,
) => {
  const confirmPassword = await bcrypt.compare(password, userPassword);
  if (!confirmPassword) {
    throw new Error("Incorrect password");
  }
  return confirmPassword;
};
