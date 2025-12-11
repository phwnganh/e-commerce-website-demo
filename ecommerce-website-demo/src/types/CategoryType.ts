import type { Products } from "./ProductTypes";

export type Categories = {
  slug: string;
  name: string;
};

export type CategoryDetail = {
  products: Products[]
}
