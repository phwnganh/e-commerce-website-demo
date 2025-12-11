import { NavLink } from "react-router-dom";
import {
  ADDRESS_BOOK,
  CANCELLATIONS,
  PAYMENT_OPTION,
  RETURNS,
  USER_PROFILE,
} from "../../constants/route.constants";

const AccountNavigation = () => {
  return (
    <section className="hidden lg:flex lg:flex-col gap-4">
      <h3 className="font-medium">Manage My Account</h3>
      <div className="flex flex-col indent-8.5 gap-2">
        <NavLink
          to={USER_PROFILE}
          className={({ isActive }) =>
            `${isActive && "text-[#DB4444]"} text-[#00000080]`
          }
        >
          My Profile
        </NavLink>
        <NavLink
          to={ADDRESS_BOOK}
          className={({ isActive }) =>
            `${isActive && "text-[#DB4444]"} text-[#00000080]`
          }
        >
          Address Book
        </NavLink>
        <NavLink
          to={PAYMENT_OPTION}
          className={({ isActive }) =>
            `${isActive && "text-[#DB4444]"} text-[#00000080]`
          }
        >
          My Payment Options
        </NavLink>
      </div>
      <p className="font-medium mt-2">My Orders</p>
      <div className="flex flex-col indent-8.5 gap-2">
        <NavLink
          to={RETURNS}
          className={({ isActive }) =>
            `${isActive && "text-[#DB4444]"} text-[#00000080]`
          }
        >
          My Returns
        </NavLink>
        <NavLink
          to={CANCELLATIONS}
          className={({ isActive }) =>
            `${isActive && "text-[#DB4444]"} text-[#00000080]`
          }
        >
          My Cancellations
        </NavLink>
      </div>
      <p className="font-medium mt-2">My WishList</p>
    </section>
  );
};

export default AccountNavigation;
