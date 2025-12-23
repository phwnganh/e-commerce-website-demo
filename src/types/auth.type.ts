import type { Category } from "./category.type";
import type { Product } from "./product.type";

export type LoginResponse = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export type GlobalContext = {
  products: Product[];
  categories: Category[];
  categoriesNavigation: string[];
  user: User | null;
  setUser: () => void;
};
