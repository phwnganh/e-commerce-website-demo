import React, { useEffect } from "react";
import { useSetAtom } from "jotai";
import {
  cartAtom,
  categoriesAtom,
  categoriesNavigationAtom,
  productDetailAtom,
  productsAtom,
  tempCartAtom,
  userAtom,
  wishlistAtom,
} from "../atom/store";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const setProducts = useSetAtom(productsAtom);
  const setCategories = useSetAtom(categoriesAtom);
  const setCategoriesNavigation = useSetAtom(categoriesNavigationAtom);
  const setUser = useSetAtom(userAtom);
  const setWishlists = useSetAtom(wishlistAtom);
  const setCarts = useSetAtom(cartAtom);
  const setTempCarts = useSetAtom(tempCartAtom);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);
  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then((res) => res.json())
      .then((res) => setCategoriesNavigation(res));
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    const savedCarts = localStorage.getItem("carts");
    if (savedCarts) {
      const parsed = JSON.parse(savedCarts);
      setCarts(parsed);
      setTempCarts(parsed);
    }
  }, []);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlists(JSON.parse(savedWishlist));
    }
  }, []);
  return children;
};

export default DataProvider;
