import { atom } from "jotai";
import { cartAtom, tempCheckoutItemAtom, wishlistAtom } from "./store";
import type { CartItem, Product } from "../types/product.type";

export const addToCartAtom = atom(null, (get, set, product: Product) => {
  const carts = get(cartAtom);
  const existingItem = carts.items.find((item) => item.id === product.id);
  let updatedProducts;
  if (existingItem) {
    updatedProducts = carts.items.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  } else {
    const newItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      thumbnail: product.thumbnail,
    };
    updatedProducts = [...carts.items, newItem];
  }

  set(cartAtom, { items: updatedProducts });
});

export const moveAllProductsToBagAtom = atom(null, (get, set) => {
  const carts = get(cartAtom);
  const wishlist = get(wishlistAtom);
  let updatedProducts = [...carts.items];
  wishlist.forEach((product) => {
    const exists = updatedProducts.some((item) => item.id === product.id);
    if (exists) {
      updatedProducts = updatedProducts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );
    } else {
      const newItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        thumbnail: product.thumbnail,
      };
      updatedProducts = [...updatedProducts, newItem];
    }
  });
  set(cartAtom, { items: updatedProducts });
  set(wishlistAtom, []);
});

export const increaseQuantityItemAtom = atom(
  null,
  (get, set, productId: string) => {
    const cart = get(tempCheckoutItemAtom);
    if (!cart) return;

    const updatedProducts = cart.items.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    set(tempCheckoutItemAtom, {
      ...cart,
      items: updatedProducts,
    });
  }
);

export const decreaseQuantityItemAtom = atom(
  null,
  (get, set, productId: string) => {
    const cart = get(tempCheckoutItemAtom);
    if (!cart) return;
    const updatedProducts = cart.items.map((item) => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity - 1);
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    set(tempCheckoutItemAtom, {
      ...cart,
      items: updatedProducts,
    });
  }
);

export const removeItemFromCartAtom = atom(
  null,
  (get, set, productId: string) => {
    const cart = get(tempCheckoutItemAtom);
    if (!cart) return;
    const updatedProducts = cart.items.filter((item) => item.id !== productId);
    set(tempCheckoutItemAtom, {
      ...cart,
      items: updatedProducts,
    });
  }
);
