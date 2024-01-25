import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const construction = getStore("construction");
  await construction.set("cat", "For bulldozers");

  const beauty = getStore("zoo");
  await beauty.set("cat", "big and meowy", {
    metadata: { material: "acrylic", sale: true },
  });

  return new Response("cat blobs set for Construction and Zoo stores");
};
