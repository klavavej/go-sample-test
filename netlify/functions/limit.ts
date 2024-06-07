import type { Context } from "@netlify/functions"

// use-case: safeguarding your lambda/edge-function usage/spend
export default async (request: Request, context: Context) => {
  // ...
};
export const config: Config = {
  path: "/",
};
