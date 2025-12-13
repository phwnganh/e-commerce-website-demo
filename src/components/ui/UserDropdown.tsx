import {  useSetAtom } from "jotai";
import WhiteUserIcon from "../../assets/white-user-icon.svg";
import CancelIcon from "../../assets/icon-cancel.svg";
import ReviewsIcon from "../../assets/Icon-Reviews.svg";
import LogoutIcon from "../../assets/Icon-logout.svg";
import { userAtom } from "../../atom/store";
import { LOGIN, ACCOUNT } from "../../constants/route.constants";
import { useNavigate } from "react-router-dom";

const UserDropdown = () => {
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate(LOGIN);
  };
  return (
    <div className="absolute top-9 right-0 z-10">
      <div className="flex flex-col gap-3 bg-black-opacity-4 w-56 pt-[18px] pb-2.5 backdrop-blur-[150px] rounded-sm text-text-1">
        <div
          role="button"
          onClick={() => navigate(ACCOUNT)}
          className={`flex flex-row items-center gap-4 py-0.5 group hover:bg-gray-300`}
        >
          <div className="w-6 h-6 flex justify-center items-center">
            <img
              src={WhiteUserIcon}
              alt="user-icon"
              loading="lazy"
              className="group-hover:brightness-1"
            />
          </div>
          <p className="text-sm group-hover:text-black">Manage My Account</p>
        </div>
        <div
          role="button"
          className="flex flex-row items-center gap-4 py-0.5 group hover:bg-gray-300"
        >
          <div className="w-6 h-6 flex justify-center items-center">
            <img
              src={CancelIcon}
              alt="cancel-icon"
              loading="lazy"
              className="group-hover:brightness-1"
            />
          </div>
          <p className="text-sm group-hover:text-black">My Cancellations</p>
        </div>
        <div
          role="button"
          className="flex flex-row items-center gap-4 py-0.5 hover:bg-gray-300 group"
        >
          <div className="w-6 h-6 flex justify-center items-center">
            <img
              src={ReviewsIcon}
              alt="review-icon"
              loading="lazy"
              className="group-hover:brightness-1"
            />
          </div>
          <p className="text-sm group-hover:text-black">My Reviews</p>
        </div>
        <div
          role="button"
          onClick={handleLogout}
          className="flex flex-row items-center gap-4 py-0.5 hover:bg-gray-300 group"
        >
          <div className="w-6 h-6 flex justify-center items-center">
            <img
              src={LogoutIcon}
              alt="logout-icon"
              loading="lazy"
              className="group-hover:brightness-1"
            />
          </div>
          <p className="text-sm group-hover:text-black">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
