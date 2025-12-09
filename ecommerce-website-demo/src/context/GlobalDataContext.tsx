import React, { createContext, useEffect, useState } from "react";
import type { Products } from "../types/ProductTypes";
import type { Categories } from "../types/CategoryType";
import type { GlobalContext } from "../types/AuthType";

export const DataContext = createContext<GlobalContext>({
  products: [],
  categories: [],
});
const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
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
  return (
    <DataContext.Provider
      value={{ products: products, categories: categories }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
