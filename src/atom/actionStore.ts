import { atom } from "jotai";
import type { CartItems, Products } from "../types/ProductTypes";
import { cartAtom, tempCartAtom, wishlistAtom } from "./store";

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

export const addToCartAtom = atom(null, (get, set, product: Products) => {
  const carts = get(cartAtom);
  const existingItem = carts.products.find((item) => item.id === product.id);
  let updatedProducts;
  if (existingItem) {
    updatedProducts = carts.products.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1),
          }
        : item
    );
  } else {
    const newItem: CartItems = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      total: product.price,
      thumbnail: product.thumbnail,
    };
    updatedProducts = [...carts.products, newItem];
  }

  const updatedCarts = {
    ...carts,
    products: updatedProducts,
    total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
  };
  set(cartAtom, updatedCarts);
  set(tempCartAtom, updatedCarts);
});
