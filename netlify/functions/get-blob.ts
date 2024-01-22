import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const construction = getStore("construction");
  const entry1 = await construction.get("nails");

  const beauty = getStore("beauty");
  const entry2 = await beauty.get("nails");

  const text = [entry1, entry2].join(" ");

  return new Response(text);
};
