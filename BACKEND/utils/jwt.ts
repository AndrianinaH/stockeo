import {
  create,
  verify,
  Payload,
  getNumericDate,
} from "https://deno.land/x/djwt@v3.0.2/mod.ts";
import { config } from "../configs/env.ts";
import { decryptData, encryptData } from "./cryptage-aes.ts";

// generate JWT key to sign
const CryptoKey = (() => {
  let key: CryptoKey;

  const generateKey = () => {
    // generate key using secret
    const encoder = new TextEncoder();
    const keyBuf = encoder.encode(config.jwt.secret);
    return crypto.subtle.importKey(
      "raw",
      keyBuf,
      { name: "HMAC", hash: "SHA-256" },
      true,
      ["sign", "verify"],
    );
  };

  return {
    getKey: async function () {
      if (!key) {
        key = await generateKey();
      }
      return key;
    },
  };
})();

// ------ JWT + Encryption
export const jwtGenerate = async (data: string) => {
  const jwtKey = await CryptoKey.getKey();
  // generate jwt
  const payload: Payload = {
    // encrypt payload using AES
    iss: encryptData(data),
    exp: getNumericDate(new Date("3000-01-01")),
  };
  const jwt = await create({ alg: "HS256", typ: "JWT" }, { payload }, jwtKey);
  return jwt;
};

export const jwtVerify = async (jwt: string) => {
  const key = await CryptoKey.getKey();
  return verify(jwt, key);
};

// ------ JWT + Decrypt payload
export const jwtDecode = async (jwt: string) => {
  // deno-lint-ignore no-explicit-any
  const encryptedPayload: any = await jwtVerify(jwt);
  return decryptData(encryptedPayload.payload.iss);
};
