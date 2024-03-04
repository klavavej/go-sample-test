import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const beauty = getStore("animals");
  const { blobs } = await animals.list();
  
  console.log(blobs);

  return new Response(`Found ${blobs.length} blobs`);
};
