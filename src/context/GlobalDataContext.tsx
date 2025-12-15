import React, { useEffect } from "react";
import { useSetAtom } from "jotai";
import {
  categoriesAtom,
  categoriesNavigationAtom,
  productsAtom,
  userAtom,
} from "../atom/store";

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const setProducts = useSetAtom(productsAtom);
  const setCategories = useSetAtom(categoriesAtom);
  const setCategoriesNavigation = useSetAtom(categoriesNavigationAtom);
  const setUser = useSetAtom(userAtom);
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
  return children;
};

export default DataProvider;
