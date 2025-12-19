import {
  API_CATEGORY_PRODUCTS_URL,
  API_PRODUCTS_URL,
} from "../constants/api.constants";
import type { CategoryDetail } from "../types/category.type";
import type { ProductsResponse } from "../types/product.type";

export const fetchAllProducts = async (): Promise<ProductsResponse> => {
  try {
    const res = await fetch(API_PRODUCTS_URL);
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductsByCategory = async (
  slug: string
): Promise<CategoryDetail> => {
  try {
    const res = await fetch(`${API_CATEGORY_PRODUCTS_URL}${slug}`);
    return res.json();
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};
