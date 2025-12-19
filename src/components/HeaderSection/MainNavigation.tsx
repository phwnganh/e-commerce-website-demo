import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ABOUT,
  CART,
  CONTACT,
  HOMEPAGE,
  LOGIN,
  ACCOUNT,
  WISHLIST,
} from "../../constants/route.constants";
import CartIcon from "../../assets/Cart1.svg";

import Wishlist from "../../assets/Wishlist.svg";
import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { cartAtom, userAtom, wishlistAtom } from "../../atom/store";
import UserDropdown from "../UserDropdown";
import ActiveNavLink from "../ui/ActiveNavLink";
import IconBadge from "../ui/IconBadge";
import SearchBar from "../ui/SearchBar";
import UserAvatarButton from "../ui/UserAvatarButton";
import MobileMenuModalDialog from "./MobileMenuModalDialog";
const MainNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useAtomValue(userAtom);
  const wishlists = useAtomValue(wishlistAtom);
  const carts = useAtomValue(cartAtom);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isUserActive = isDropdownOpen || location.pathname === ACCOUNT;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleUserClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <section className="flex flex-row justify-between items-center py-[7px]">
      <button
        className="md:hidden block"
        onClick={() => setMobileMenuOpen(true)}
      >
        <svg width="24" height="24" stroke="currentColor">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <Link to={HOMEPAGE} className="font-bold text-2xl">
        Exclusive
      </Link>
      <div className="hidden lg:flex gap-12 items-center">
        <ActiveNavLink to={HOMEPAGE}>Home</ActiveNavLink>
        <ActiveNavLink to={CONTACT}>Contact</ActiveNavLink>
        <ActiveNavLink to={ABOUT}>About</ActiveNavLink>
        {!user && <ActiveNavLink to={LOGIN}>Login</ActiveNavLink>}
      </div>

      <div className="flex gap-6 items-center">
        <SearchBar />

        <div className="flex gap-4">
          <NavLink
            to={user ? WISHLIST : LOGIN}
            className="rounded-full relative"
          >
            <img src={Wishlist} alt="heart-icon" />
            {user && <IconBadge count={wishlists.length} hideIfZero />}
          </NavLink>
          <NavLink to={user ? CART : LOGIN} className="rounded-full relative">
            <img src={CartIcon} alt="cart-icon" />
            {user && <IconBadge count={carts.products.length} hideIfZero />}
          </NavLink>
          {user && (
            <div ref={dropdownRef} className="relative">
              <UserAvatarButton
                onClick={handleUserClick}
                isActive={isDropdownOpen || isUserActive}
              >
                {isDropdownOpen && <UserDropdown />}
              </UserAvatarButton>
            </div>
          )}
        </div>
      </div>

      {/* modal open mobile user dropdown */}
      <MobileMenuModalDialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        user={user}
      />
    </section>
  );
};

export default MainNavigation;
