import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const construction = getStore("construction");
  await construction.delete("nails");

  const beauty = getStore("beauty");
  await beauty.delete("nails");

  return new Response("nail blobs deleted from Construction and beauty stores");
};
