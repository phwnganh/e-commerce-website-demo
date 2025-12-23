import { atom } from "jotai";
import { wishlistAtom } from "./store";
import type { Product } from "../types/product.type";

export const toggleWishlistAtom = atom(null, (get, set, product: Product) => {
  const wishlists = get(wishlistAtom);
  const exists = wishlists.some((item) => item.id === product.id);

  const updated = exists
    ? wishlists.filter((item) => item.id !== product.id)
    : [...wishlists, product];

  set(wishlistAtom, updated);
});

export const removeWishlistAtom = atom(null, (get, set, product: Product) => {
  const wishlists = get(wishlistAtom);
  const updated = wishlists.filter((item) => item.id !== product.id);
  set(wishlistAtom, updated);
});