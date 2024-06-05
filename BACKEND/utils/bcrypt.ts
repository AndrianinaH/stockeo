import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

// deno deploy cant use worker
// https://github.com/denoland/deploy_feedback/issues/171
// we need to use sync method instead of asynchronous
export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(8);
  return bcrypt.hashSync(password, salt);
};

export const confirmPassword = (password: string, userPassword: string) => {
  const confirmPassword = bcrypt.compareSync(password, userPassword);
  if (!confirmPassword) {
    throw new Error("Incorrect password");
  }
  return confirmPassword;
};
