import { NavLink, useLocation } from "react-router-dom";
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
import UserCircle from "../../assets/user-circle.svg";
import UserShape from "../../assets/user-shape.svg";
import { useEffect, useRef, useState } from "react";
import { useAtomValue } from "jotai";
import { cartAtom, userAtom, wishlistAtom } from "../../atom/store";
import UserDropdown from "../ui/UserDropdown";
const MainNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useAtomValue(userAtom);
  const wishlists = useAtomValue(wishlistAtom);
  const carts = useAtomValue(cartAtom);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

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

  return (
    <section className="flex flex-row justify-between items-center py-[7px] px-4 lg:px-0">
      <button className="md:hidden block">
        <svg width="24" height="24" stroke="currentColor">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <h3 className="font-bold text-2xl">Exclusive</h3>
      <div className="hidden lg:flex gap-12 items-center">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive && "border-b border-b-black-opacity-80"
            } hover:border-b hover:border-b-black-opacity-80`
          }
          to={HOMEPAGE}
        >
          Home
        </NavLink>
        <NavLink
          to={CONTACT}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-b-black-opacity-80"
            } hover:border-b border-b-black-opacity-80`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to={ABOUT}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-b-black-opacity-80"
            } hover:border-b border-b-black-opacity-80`
          }
        >
          About
        </NavLink>
        {!user && (
          <NavLink
            to={LOGIN}
            className={({ isActive }) =>
              `${
                isActive && "border-b border-b-black-opacity-80"
              } hover:border-b border-b-black-opacity-80`
            }
          >
            Login
          </NavLink>
        )}
      </div>

      <div className="flex gap-6 items-center">
        <div className=" bg-secondary-2 py-1.75 hidden sm:flex gap-8.5 pl-5 pr-3 rounded-sm">
          <div className="min-w-[153px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-xs w-full focus:outline-none"
            />
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0  cursor-pointer"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        <div className="flex gap-4">
          {/* <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg> */}
          <NavLink
            to={user ? WISHLIST : LOGIN}
            className="rounded-full relative"
          >
            <img src={Wishlist} alt="heart-icon" loading="lazy" />
            {user && (
              <div className="absolute right-0 top-0 bottom-4 rounded-full w-4 h-4 bg-button-2 text-text-1 flex justify-center items-center text-xs">
                {wishlists.length}
              </div>
            )}
          </NavLink>

          {/* <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg> */}
          <NavLink
            to={user ? CART : LOGIN}
            className="w-8 h-8 flex justify-center relative"
          >
            <img src={CartIcon} alt="cart-icon" loading="lazy"/>
            {user && (
              <div className="absolute right-0 top-0 bottom-4 rounded-full w-4 h-4 bg-button-2 text-text-1 flex justify-center items-center text-xs">
                {carts?.products.length || 0}
              </div>
            )}
          </NavLink>
          {user && (
            <div ref={dropdownRef} className="relative">
              <button
                onClick={handleUserClick}
                className={`relative w-8 h-8 flex justify-center cursor-pointer ${
                  isUserActive ? "bg-button-2 rounded-full" : ""
                }`}
              >
                <div
                  className={`flex flex-col items-center justify-center ${
                    isDropdownOpen ? "gap-0.5" : "gap-0.5"
                  } `}
                >
                  <img
                    src={UserCircle}
                    alt="user-circle-icon"
                    loading="lazy"
                    className={`${
                      isUserActive
                        ? "w-1.5 h-1.5 brightness-0 invert"
                        : "w-3 h-3"
                    }`}
                  />
                  <img
                    src={UserShape}
                    alt="user-shape-icon"
                    loading="lazy"
                    className={`${
                      isUserActive
                        ? "w-[11px] h-[5px] brightness-0 invert"
                        : "w-[17px] h-2"
                    }`}
                  />
                </div>

                {/* <img
                src={UserIcon}
                alt="user-icon"
                className={`${isDropdownOpen ? "brightness-0 invert w-full h-full border" : ""}`}
              /> */}
                {isDropdownOpen && <UserDropdown />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainNavigation;
