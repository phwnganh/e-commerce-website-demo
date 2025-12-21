import ActiveNavLink from "../ui/ActiveNavLink";
import {
  ABOUT,
  ACCOUNT,
  CONTACT,
  HOMEPAGE,
  LOGIN,
} from "../../constants/route.constants";
import { NavLink } from "react-router-dom";
import type { Carts, Products } from "../../types/product.type";
import UserAvatarButton from "../ui/UserAvatarButton";
import { useLogout } from "../../hooks/useLogout";
import LogoutIcon from "../icons/LogoutIcon";
import { navIcons } from "../../constants/navIcons.constants";
import NavIconButton from "./NavIconButton";

const MobileMenuModalDialog = ({
  open,
  onClose,
  user,
  wishlist,
  carts,
}: {
  open: boolean;
  onClose: () => void;
  user: any;
  wishlist: Products[];
  carts: Carts;
}) => {
  const isUserActive = location.pathname === ACCOUNT;
  const handleLogout = useLogout();
  const navIconNotifications = navIcons({
    wishlistCount: wishlist.length,
    cartCount: carts.products.length,
  });
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 md:hidden flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black-opacity-40"
      ></div>

      <div
        className="absolute z-10 w-full inset-0 bg-white rounded-md flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="text-base font-bold">Exclusive</h3>
          {user && (
            <div className="flex items-center gap-4">
              {navIconNotifications.map((item, index) => (
                <NavIconButton
                  key={index}
                  to={item.getTo(true)}
                  onClick={onClose}
                  icon={item.icon}
                  alt={item.alt}
                  showBadge={true}
                  badgeCount={item.getCount?.()}
                />
              ))}
            </div>
          )}

          <button onClick={onClose} className="text-xl leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col flex-1">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <ActiveNavLink to={HOMEPAGE} onClick={onClose}>
              Home
            </ActiveNavLink>
            <ActiveNavLink to={CONTACT} onClick={onClose}>
              Contact
            </ActiveNavLink>
            <ActiveNavLink to={ABOUT} onClick={onClose}>
              About
            </ActiveNavLink>
          </nav>
          {/* mt-auto - đẩy content còn lại xuống đáy */}
          <div className="mt-auto">
            <hr className="border-t border-t-black-opacity-30" />
            {!user ? (
              <div className="px-4 py-2 flex flex-col">
                {" "}
                <ActiveNavLink to={LOGIN} onClick={onClose}>
                  Login
                </ActiveNavLink>
              </div>
            ) : (
              <div className="px-4 py-2 flex flex-col gap-2">
                <NavLink
                  to={ACCOUNT}
                  onClick={onClose}
                  className="flex justify-start items-center gap-4"
                >
                  <UserAvatarButton isActive={isUserActive} />
                  <p>Manage My Account</p>
                </NavLink>
                <button
                  aria-label="logout-btn"
                  onClick={() => {
                    handleLogout();
                    onClose();
                  }}
                  className="flex justify-start items-center ml-1 gap-5"
                >
                  <div className="flex justify-center items-center">
                    <LogoutIcon />
                  </div>

                  <p>Logout</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuModalDialog;
