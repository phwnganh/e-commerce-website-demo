import {
  API_CATEGORIES_NAVIGATION_URL,
  API_CATEGORIES_URL,
} from "../constants/api.constants";
import type { Categories } from "../types/category.type";

export const fetchAllCategories = async (): Promise<Categories[]> => {
  try {
    const res = await fetch(API_CATEGORIES_URL);
    return res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchAllCategoriesNavigation = async (): Promise<string[]> => {
  try {
    const res = await fetch(API_CATEGORIES_NAVIGATION_URL);
    return res.json();
  } catch (error) {
    console.error("Error fetching categories navigation:", error);
    throw error;
  }
};
