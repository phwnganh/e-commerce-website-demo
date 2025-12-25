import { Link, useLocation } from "react-router-dom";
import {
  HOMEPAGE,
  LOGIN,
  ACCOUNT,
} from "../../constants/route.constants";

import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { accessTookenAtom, cartAtom, wishlistAtom } from "../../atom/store";
import UserDropdown from "../UserDropdown";
import ActiveNavLink from "../ui/ActiveNavLink";
import SearchBar from "../ui/SearchBar";
import UserAvatarButton from "../ui/UserAvatarButton";
import MobileMenuModalDialog from "./MobileMenuModalDialog";
import HamburgerIcon from "../icons/HamburgerIcon";
import NavIconButton from "./NavIconButton";
import { navIcons } from "../../constants/navIcons.constants";
import { mainNavLinks } from "../../constants/mainNavLinks.constants";
const MainNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const accessToken = useAtomValue(accessTookenAtom);
  const wishlists = useAtomValue(wishlistAtom);
  const carts = useAtomValue(cartAtom);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isUserActive = isDropdownOpen || location.pathname === ACCOUNT;
  const isLoggedIn = Boolean(accessToken);

  const navIconNotifications = navIcons({
    wishlistCount: wishlists.length,
    cartCount: carts.products.length,
  });

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
    <section className="flex flex-row justify-between items-center px-4 lg:px-0">
      <Link to={HOMEPAGE} className="font-bold text-base sm:text-2xl">
        Exclusive
      </Link>
      <div className="hidden lg:flex gap-12 items-center">
        {mainNavLinks.map((link, index) => (
          <ActiveNavLink key={index} to={link.to}>
            {link.item}
          </ActiveNavLink>
        ))}
        {!accessToken && <ActiveNavLink to={LOGIN}>Login</ActiveNavLink>}
      </div>

      <div className="flex gap-6 items-center">
        <SearchBar />
        <button
          className="sm:hidden block"
          onClick={() => setMobileMenuOpen(true)}
        >
          <HamburgerIcon />
        </button>
        <div className="hidden sm:flex gap-4">
          {navIconNotifications.map((item, index) => (
            <NavIconButton
              key={index}
              to={item.getTo(isLoggedIn)}
              icon={item.icon}
              alt={item.alt}
              showBadge={isLoggedIn && Boolean(item.getCount)}
              badgeCount={item.getCount?.()}
            />
          ))}

          {isLoggedIn && (
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
        accessToken={accessToken}
        wishlist={wishlists}
        carts={carts}
      />
    </section>
  );
};

export default MainNavigation;
