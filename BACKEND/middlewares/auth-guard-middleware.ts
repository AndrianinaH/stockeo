import { Next } from "https://deno.land/x/oak@v12.6.1/middleware.ts";
import { Context } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { jwtVerify } from "../utils/jwt.ts";

export const AuthGuardMiddleware = async (ctx: Context, next: Next) => {
  const authorizationHeader = ctx.request.headers.get("Authorization");
  if (authorizationHeader && authorizationHeader.startsWith("Bearer ")) {
    const token = authorizationHeader.substring(7); // Remove "Bearer " prefix
    try {
      const isValidToken = await jwtVerify(token);
      if (isValidToken) {
        // Token is valid, proceed to the next middleware or route handler
        await next();
      }
    } catch (error) {
      console.error("JWT verify error", error);
      ctx.response.status = 401; // Unauthorized
      ctx.response.body = "Invalid bearer token";
    }
  } else {
    ctx.response.status = 401; // Unauthorized
    ctx.response.body = "Bearer token missing";
  }
};
