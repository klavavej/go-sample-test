import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const construction = getStore("construction");
  await construction.set("cat", "For bulldozers");

  const zoo = getStore("zoo");
  await zoo.set("cat", "big and meowy");
  await zoo.set("cat/lion", "roar");
  await zoo.set("cat/puma", "fast");

  const test = getStore("test");
  await test.set("à", "naïve");

  return new Response("cat blobs set for Construction and Zoo stores");
};
