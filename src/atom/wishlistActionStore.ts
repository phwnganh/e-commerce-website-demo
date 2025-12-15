import { atom } from "jotai";
import { wishlistAtom } from "./store";
import type { Products } from "../types/ProductTypes";

export const toggleWishlistAtom = atom(null, (get, set, product: Products) => {
  const wishlists = get(wishlistAtom);
  const exists = wishlists.some((item) => item.id === product.id);

  const updated = exists
    ? wishlists.filter((item) => item.id !== product.id)
    : [...wishlists, product];

  set(wishlistAtom, updated);
});

export const removeWishlistAtom = atom(null, (get, set, product: Products) => {
  const wishlists = get(wishlistAtom);
  const updated = wishlists.filter((item) => item.id !== product.id);
  set(wishlistAtom, updated);
});