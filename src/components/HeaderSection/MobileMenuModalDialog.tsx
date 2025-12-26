import ActiveNavLink from "../ui/ActiveNavLink";
import { ACCOUNT, LOGIN } from "../../constants/route.constants";
import { NavLink } from "react-router-dom";
import type { Cart, Product } from "../../types/product.type";
import UserAvatarButton from "../ui/UserAvatarButton";
import { useLogout } from "../../hooks/useLogout";
import LogoutIcon from "../icons/LogoutIcon";
import { navIcons } from "../../constants/navIcons.constants";
import NavIconButton from "./NavIconButton";
import ExitIcon from "../icons/ExitIcon";
import { mainNavLinks } from "../../constants/mainNavLinks.constants";

const MobileMenuModalDialog = ({
  open,
  onClose,
  accessToken,
  wishlist,
  carts,
}: {
  open: boolean;
  onClose: () => void;
  accessToken: string;
  wishlist: Product[];
  carts: Cart;
}) => {
  const isUserActive = location.pathname === ACCOUNT;
  const {handleLogoutAndRedirect} = useLogout();
  const navIconNotifications = navIcons({
    wishlistCount: wishlist.length,
    cartCount: carts?.items.length,
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
          {accessToken && (
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
            <ExitIcon />
          </button>
        </div>
        <div className="flex flex-col flex-1">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {mainNavLinks.map((link, index) => (
              <ActiveNavLink key={index} to={link.to} onClick={onClose}>
                {link.item}
              </ActiveNavLink>
            ))}
          </nav>
          {/* mt-auto - đẩy content còn lại xuống đáy */}
          <div className="mt-auto">
            <hr className="border-t border-t-black-opacity-30" />
            {!accessToken ? (
              <div className="px-4 py-2 flex flex-col">
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
                    handleLogoutAndRedirect();
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
