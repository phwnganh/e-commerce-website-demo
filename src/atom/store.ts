import { atom } from "jotai";
import type { Carts, Products } from "../types/ProductTypes";
import type { Categories } from "../types/CategoryType";
import type { User } from "../types/AuthType";
import { atomWithStorage } from "jotai/utils";

export const productsAtom = atom<Products[]>([]);
export const categoriesAtom = atom<Categories[]>([]);
export const categoriesNavigationAtom = atom<string[]>([]);
export const userAtom = atomWithStorage<User | null>("user", null);
export const accessTookenAtom = atomWithStorage<string>("token", "")

export const wishlistAtom = atomWithStorage<Products[]>("wishlist", [])
export const cartAtom = atomWithStorage<Carts>("carts", {
  id: "1",
  total: 0,
  discountTotal: 0,
  products: [],
});

export const tempCartAtom = atom<Carts | null>(null)

