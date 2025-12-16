import { NavLink } from "react-router-dom";
import {
  ADDRESS_BOOK,
  CANCELLATIONS,
  PAYMENT_OPTION,
  RETURNS,
  USER_PROFILE,
} from "../../constants/route.constants";
import React from "react";

const AccountNavigation = () => {
  const ACCOUNT_NAV = [
    {
      title: "Manage My Account",
      links: [
        {
          label: "My Profile",
          to: USER_PROFILE,
        },
        {
          label: "Address Book",
          to: ADDRESS_BOOK,
        },
        {
          label: "My Payment Options",
          to: PAYMENT_OPTION,
        },
      ],
    },
    {
      title: "My Orders",
      links: [
        {
          label: "My Returns",
          to: RETURNS,
        },
        {
          label: "My Cancellations",
          to: CANCELLATIONS,
        },
      ],
    },
    {
      title: "My WishList",
    },
  ];
  return (
    <section className="hidden lg:flex lg:flex-col gap-4">
      {ACCOUNT_NAV.map((nav, index) => (
        <React.Fragment key={index}>
          <h3 className="font-medium">{nav.title}</h3>
          <div className="flex flex-col indent-8.5 gap-2">
            {nav.links?.map((item, itemIndex) => (
              <NavLink
                key={itemIndex}
                to={item.to}
                className={({ isActive }) =>
                  `${isActive && "text-button-2"} text-black-opacity-80`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default AccountNavigation;
