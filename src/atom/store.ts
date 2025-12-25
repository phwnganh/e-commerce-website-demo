import { atom } from "jotai";
import type { Cart, Product } from "../types/product.type";
import type { User } from "../types/auth.type";
import { atomWithStorage } from "jotai/utils";
import {
  fetchAllProducts,
  fetchProductsByCategory,
} from "../services/products.service";
import {
  fetchAllCategories,
  fetchAllCategoriesNavigation,
} from "../services/category.service";
import { atomFamily } from "jotai-family";

export const productsAtom = atom(fetchAllProducts);
export const productsByCategoryAtom = atomFamily((slug: string) =>
  atom(async () => {
    return fetchProductsByCategory(slug);
  })
);
export const categoriesAtom = atom(fetchAllCategories);
export const categoriesNavigationAtom = atom(fetchAllCategoriesNavigation);
export const userAtom = atomWithStorage<User | null>("user", null);
export const accessTookenAtom = atomWithStorage<string>("token", "");

export const wishlistAtom = atomWithStorage<Product[]>("wishlist", []);
export const cartAtom = atomWithStorage<Cart>("carts", {
  items: []
});

export const tempCheckoutItemAtom = atom<Cart | null>(null);
