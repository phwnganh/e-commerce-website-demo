import type { Categories } from "./CategoryType";
import type { Products } from "./ProductTypes";

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
}

export type GlobalContext = {
  products: Products[]
  categories: Categories[]
}