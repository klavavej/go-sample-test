import { getDeployStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const store = getDeployStore();
  await store.set("production nails", "For general production carpentry");

  return new Response("Nail blob set for this deploy");
};
