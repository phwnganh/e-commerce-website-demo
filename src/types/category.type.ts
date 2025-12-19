import type { Products } from "./product.type";

export type Categories = {
  slug: string;
  name: string;
};

export type CategoryDetail = {
  products: Products[]
}
