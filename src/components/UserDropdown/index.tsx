import WhiteUserIcon from "../../assets/white-user-icon.svg";
import CancelIcon from "../../assets/cancel-icon.svg";
import ReviewsIcon from "../../assets/reviews-icon.svg";
import LogoutIcon from "../../assets/logout-icon.svg";
import { ACCOUNT } from "../../constants/route.constants";
import { useNavigate } from "react-router-dom";
import UserDropdownItem from "./UserDropdownItem";
import { useLogout } from "../../hooks/useLogout";

const UserDropdown = () => {
  const USER_MENU_ITEMS = [
    {
      label: "Manage My Account",
      icon: WhiteUserIcon,
      to: ACCOUNT,
    },
    {
      label: "My Cancellations",
      icon: CancelIcon,
    },
    {
      label: "My Reviews",
      icon: ReviewsIcon,
    },
    {
      label: "Logout",
      icon: LogoutIcon,
      action: "logout",
    },
  ];
  const navigate = useNavigate();
  const handleLogout = useLogout()
  return (
    <div className="absolute top-9 right-0 z-10">
      <div
        className="flex flex-col gap-3 bg-[rgba(0,0,0,0.08)]
 w-56 pt-[18px] pb-2.5 backdrop-blur-xl border border-black-opacity-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] rounded-sm text-text-1"
      >
        {USER_MENU_ITEMS.map((item, index) => (
          <UserDropdownItem
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={() => {
              if (item.action === "logout") {
                handleLogout();
              } else if (item.to) {
                navigate(item.to);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UserDropdown;
