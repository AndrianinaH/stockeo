import { Aes } from "https://deno.land/x/crypto@v0.10.1/aes.ts";
import {
  Cbc,
  Padding,
} from "https://deno.land/x/crypto@v0.10.1/block-modes.ts";
import { config } from "../configs/env.ts";

export const encryptData = (payload: string) => {
  const te = new TextEncoder();
  // using AES encryption, key need to be 16, 24 or 32 bits size
  const key = te.encode(config.jwe.secret);
  const data = te.encode(payload);
  const iv = new Uint8Array(16);
  const cipher = new Cbc(Aes, key, iv, Padding.PKCS7);
  return cipher.encrypt(data).toString();
};

export const decryptData = (encryptedPayload: string) => {
  const te = new TextEncoder();
  const td = new TextDecoder();
  const key = te.encode(config.jwe.secret);
  const iv = new Uint8Array(16);
  const decipher = new Cbc(Aes, key, iv, Padding.PKCS7);
  const decryptedPayload = td.decode(
    decipher.decrypt(new Uint8Array(encryptedPayload.split(",").map(Number))),
  );
  return decryptedPayload;
};
