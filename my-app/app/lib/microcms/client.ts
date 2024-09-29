import { ProductType } from "@/app/types/types";
import { MicroCMSQueries, createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});

export const getAllProducts = async () => {
  const allProducts = await client.getList<ProductType>({
    endpoint: "nekokan",
    queries: {
      offset: 0,
      limit: 10,
    },
  });

  return allProducts;
};

