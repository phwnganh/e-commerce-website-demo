import { atom } from "jotai";
import { cartAtom, tempCartAtom, wishlistAtom } from "./store";
import type { CartItem, Product } from "../types/product.type";

export const addToCartAtom = atom(null, (get, set, product: Product) => {
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
    const newItem: CartItem = {
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
});

export const moveAllProductsToBagAtom = atom(null, (get, set) => {
  const carts = get(cartAtom);
  const wishlist = get(wishlistAtom);
  let updatedProducts = [...carts.products];
  wishlist.forEach((product) => {
    const exists = updatedProducts.some((item) => item.id === product.id);
    if (exists) {
      updatedProducts = updatedProducts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: (item.quantity + 1) * item.price,
            }
          : item
      );
    } else {
      const newItem: CartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        total: product.price,
        thumbnail: product.thumbnail,
      };
      updatedProducts = [...updatedProducts, newItem];
    }
  });

  const updatedCarts = {
    ...carts,
    products: updatedProducts,
    total: updatedProducts.reduce((sum, item) => sum + item.total, 0),
  };
  set(cartAtom, updatedCarts);
  set(wishlistAtom, []);
});


export const increaseQuantityItemAtom = atom(
  null,
  (get, set, productId: string) => {
    const cart = get(tempCartAtom);
    if (!cart) return;

    const updatedProducts = cart.products.map((item) =>
      item.id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
            total: item.price * (item.quantity + 1),
          }
        : item
    );
    const updatedCart = {
      ...cart,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, product) => sum + product.total, 0),
    };
    set(tempCartAtom, updatedCart);
  }
);

export const decreaseQuantityItemAtom = atom(
  null,
  (get, set, productId: string) => {
    const cart = get(tempCartAtom);
    if (!cart) return;
    const updatedProducts = cart.products.map((item) => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity - 1);
        return {
          ...item,
          quantity: newQuantity,
          total: newQuantity * item.price,
        };
      }
      return item;
    });

    const updatedCart = {
      ...cart,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, product) => sum + product.total, 0),
    };
    set(tempCartAtom, updatedCart);
  }
);

export const removeItemFromCartAtom = atom(
  null,
  (get, set, productId: string) => {
    const cart = get(tempCartAtom);
    if (!cart) return;
    const updatedProducts = cart.products.filter(
      (item) => item.id !== productId
    );
    const updatedCart = {
      ...cart,
      products: updatedProducts,
      total: updatedProducts.reduce((sum, product) => sum + product.total, 0),
    };
    set(tempCartAtom, updatedCart);
  }
);