import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const construction = getStore("construction");
  await construction.delete("cat");

  const beauty = getStore("zoo");
  await beauty.delete("cat");

  return new Response("cat blobs deleted from Construction and zoo stores");
};
