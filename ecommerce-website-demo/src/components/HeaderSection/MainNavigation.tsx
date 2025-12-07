import { NavLink, useNavigate } from "react-router-dom";
import {
  CART,
  HOMEPAGE,
  LOGIN,
  WISHLIST,
} from "../../constants/route.constants";
import HeartIcon from "../../assets/heart-icon.svg";
import CartIcon from "../../assets/Cart1.svg";
import UserIcon from "../../assets/user.svg";
import WhiteUserIcon from '../../assets/white-user-icon.svg'
import CancelIcon from "../../assets/icon-cancel.svg";
import ReviewsIcon from "../../assets/Icon-Reviews.svg";
import LogoutIcon from "../../assets/Icon-logout.svg";
import { useEffect, useState } from "react";
import type { User } from "../../types/AuthType";
import type { Carts, Products } from "../../types/ProductTypes";
const MainNavigation = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [wishlists, setWishlists] = useState<Products[]>([]);
  const [carts, setCarts] = useState<Carts>();
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlists(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    const savedCarts = localStorage.getItem("carts");
    if (savedCarts) {
      setCarts(JSON.parse(savedCarts));
    }
  }, []);

  const handleUserClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <section className="flex flex-row justify-between items-center py-[7px]">
      <button className="lg:hidden block">
        <svg width="24" height="24" stroke="currentColor">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>
      <h3 className="font-bold text-2xl">Exclusive</h3>
      <div className="hidden lg:flex gap-12 items-center">
        <NavLink
          className={({ isActive }) =>
            `${isActive ? "border-b-2" : "hover:border-b-2"}`
          }
          to={HOMEPAGE}
        >
          Home
        </NavLink>
        <div>Contact</div>
        <div>About</div>
        {!user ? (
          <NavLink
            to={LOGIN}
            className={({ isActive }) =>
              `${isActive ? "border-b-2" : "hover:border-b-2"}`
            }
          >
            Login
          </NavLink>
        ) : null}
      </div>

      <div className="flex gap-6 items-center">
        <div className=" bg-[#F5F5F5] py-1.75 hidden sm:flex gap-8.5 pl-5 pr-3 rounded-sm">
          <div className="min-w-[153px]">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="text-xs w-full"
            />
          </div>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0"
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
          <button
            onClick={() => navigate(WISHLIST)}
            className="w-8 h-8 flex justify-center items-center rounded-full relative"
          >
            <img src={HeartIcon} alt="heart-icon" className="w-5 h-5" />
            <div className="absolute right-0 top-0 bottom-4 rounded-full w-4 h-4 bg-[#DB4444] text-[#FAFAFA] justify-center items-center text-xs">
              {wishlists.length}
            </div>
          </button>

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
          <button
            onClick={() => navigate(CART)}
            className="w-8 h-8 flex justify-center relative"
          >
            <img src={CartIcon} alt="cart-icon" />
            <div className="absolute right-0 top-0 bottom-4 rounded-full w-4 h-4 bg-[#DB4444] text-[#FAFAFA] justify-center items-center text-xs">
              {carts?.products.length}
            </div>
          </button>
          <button
            onClick={handleUserClick}
            className={`relative w-8 h-8 flex justify-center ${
              isDropdownOpen ? "bg-[#DB4444] rounded-full" : ""
            }`}
          >
            <img
              src={UserIcon}
              alt="user-icon"
              className={`${isDropdownOpen ? "brightness-0 invert" : ""}`}
            />
            {isDropdownOpen && (
              <div className="absolute top-9 right-0">
                <div className="flex flex-col gap-3 bg-[#0000000A] backdrop-blur-[150px] rounded-sm p-3.5 text-[#FAFAFA]">
                  <div className="flex flex-row gap-4 w-56 hover:bg-gray-300 group">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <img
                        src={WhiteUserIcon}
                        alt="user-icon"
                        className="group-hover:brightness-1"
                      />
                    </div>
                    <p className="text-sm group-hover:text-black">
                      Manage My Account
                    </p>
                  </div>
                  <div className="flex flex-row gap-4 group hover:bg-gray-300">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <img src={CancelIcon} alt="cancel-icon" className="group-hover:brightness-1" />
                    </div>
                    <p className="text-sm group-hover:text-black">My Cancellations</p>
                  </div>
                  <div className="flex flex-row gap-4 hover:bg-gray-300 group">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <img src={ReviewsIcon} alt="review-icon" className="group-hover:brightness-1"/>
                    </div>
                    <p className="text-sm group-hover:text-black">My Reviews</p>
                  </div>
                  <div className="flex flex-row gap-4 hover:bg-gray-300 group">
                    <div className="w-6 h-6 flex justify-center items-center">
                      <img src={LogoutIcon} alt="logout-icon" className="group-hover:brightness-1"/>
                    </div>
                    <p className="text-sm group-hover:text-black">Logout</p>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainNavigation;
