import { atom } from "jotai";
import type { Carts, Products } from "../types/ProductTypes";
import type { Categories, CategoryDetail } from "../types/CategoryType";
import type { User } from "../types/AuthType";

export const productsAtom = atom<Products[]>([]);
export const productDetailAtom = atom<Products | null>(null)
export const categoryDetailAtom = atom<CategoryDetail>()
export const categoriesAtom = atom<Categories[]>([]);
export const categoriesNavigationAtom = atom<string[]>([]);
export const userAtom = atom<User | null>(null);

export const wishlistAtom = atom<Products[]>([]);
export const cartAtom = atom<Carts>({
  id: "1",
  total: 0,
  discountTotal: 0,
  products: [],
});

export const tempCartAtom = atom<Carts>({
    id: "1",
    total: 0,
    discountTotal: 0,
    products: []
})
