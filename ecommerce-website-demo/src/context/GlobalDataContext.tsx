import React, { createContext, useEffect, useState } from "react";
import type { Products } from "../types/ProductTypes";
import type { Categories } from "../types/CategoryType";
import type { GlobalContext } from "../types/AuthType";

export const DataContext = createContext<GlobalContext>({
  products: [],
  categories: [],
  categoriesNavigation: [],
});
const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [categoriesNavigation, setCategoriesNavigation] = useState<string[]>(
    []
  );
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
  return (
    <DataContext.Provider
      value={{
        products: products,
        categories: categories,
        categoriesNavigation: categoriesNavigation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
