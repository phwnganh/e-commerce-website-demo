import { atom } from "jotai";
import type { Products } from "../types/ProductTypes";
import { wishlistAtom } from "./store";

export const toggleWishlistAtom = atom(null, (get, set, product: Products) => {
    const wishlists = get(wishlistAtom)
    const exists = wishlists.some(item => item.id === product.id)

    const updated = exists ? wishlists.filter(item => item.id !== product.id) : [...wishlists, product]

    set(wishlistAtom, updated)
})