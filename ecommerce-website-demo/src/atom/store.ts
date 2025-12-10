import { atom } from "jotai";
import type { Products } from "../types/ProductTypes";
import type { Categories } from "../types/CategoryType";
import type { User } from "../types/AuthType";

export const productsAtom = atom<Products[]>([]);
export const categoriesAtom = atom<Categories[]>([]);
export const categoriesNavigationAtom = atom<string[]>([]);
export const userAtom = atom<User | null>(null);
