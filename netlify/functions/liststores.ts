import { listStores } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const { stores } = await listStores();
  
  // [ "beauty", "construction" ]
  console.log(stores);

  return new Response(`Found ${stores.length} stores`);
};
