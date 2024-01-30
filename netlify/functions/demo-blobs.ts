import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const construction = getStore("construction");
  await construction.set("nails", "For general carpentry");
  await construction.set("tape/masking", "low tack");
  await construction.set("tape/duct", "high tack");

  const animals = getStore("animals");
  await animals.set("bird", "bird");
  await animals.set("cats/shorthair", "short");
  await animals.set("cats/shorthair", "long");
  await animals.set("dogs/beagle", "woof");
  await animals.set("dogs/corgi", "bark");

  const beauty = getStore("beauty");
  await beauty.set("nails", "For formal events", {
    metadata: { material: "acrylic", sale: true },
  });

  return new Response("Nail blobs set for Construction and Beauty stores");
};
