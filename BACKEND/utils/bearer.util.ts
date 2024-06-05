import { Request } from "https://deno.land/x/oak@v12.6.1/mod.ts";

export const getBearerToken = (request: Request) => {
  const authorizationHeader = request.headers.get("Authorization");
  return authorizationHeader?.substring(7); // Remove "Bearer " prefix
};
