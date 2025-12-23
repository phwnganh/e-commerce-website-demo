import type { Product } from "./product.type";

export type Category = {
  slug: string;
  name: string;
};

export type CategoryDetail = {
  products: Product[]
}
