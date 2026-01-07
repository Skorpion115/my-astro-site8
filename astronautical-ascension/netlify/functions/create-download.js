import crypto from "crypto";
import { getStore } from "@netlify/blobs";

export async function handler() {
  const store = getStore("download-tokens");

  const token = crypto.randomBytes(16).toString("hex");

  const expires = new Date();
  expires.setDate(expires.getDate() + 60);

  await store.set(token, JSON.stringify({
    product: "yesterday",
    expires: expires.toISOString()
  }));

  return {
    statusCode: 302,
    headers: {
      Location: `/thanks-yesterday?token=${token}`
    }
  };
}
