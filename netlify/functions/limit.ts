import type { Context } from "@netlify/functions"

// use-case: safeguarding your lambda/edge-function usage/spend
export default async (request: Request, context: Context) => {
  // ...
};
export const config: Config = {
  path: "/",
  rateLimit: {
    windowLimit: 100,
    aggregateBy: ["ip", "domain"],
  }
};

// same use-case
export default async (request: Request, context: Context) => {
  // ...
};
export const config: Config = {
  path: "/",
  rateLimit: {
  	action: "rewrite" // optional, will default to "rate_limit"
    to: "/custom_rate_limit.html", // only needed if action is "rewrite"
    windowLimit: 100,
    aggregateBy: ["ip", "domain"],
  }
};
