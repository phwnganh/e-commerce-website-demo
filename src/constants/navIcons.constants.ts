import { CART, LOGIN, WISHLIST } from "./route.constants";
import CartIcon from "../assets/cart-icon.svg";

import Wishlist from "../assets/wishlist-icon.svg";
import type { NavIcon } from "../types/navigation.type";
export const navIcons = ({
  wishlistCount,
  cartCount,
}: {
  wishlistCount: number;
  cartCount: number;
}): NavIcon[] => [
  {
    icon: Wishlist,
    alt: "wishlist-icon",
    getTo: (isLoggedIn: boolean) => (isLoggedIn ? WISHLIST : LOGIN),
    getCount: () => wishlistCount,
  },
  {
    icon: CartIcon,
    alt: "cart-icon",
    getTo: (isLoggedIn: boolean) => (isLoggedIn ? CART : LOGIN),
    getCount: () => cartCount,
  },
];
