import { NavLink } from "react-router-dom";
import { HOMEPAGE, USER_PROFILE } from "../../constants/route.constants";
import { useAtomValue } from "jotai";
import { userAtom } from "../../atom/store";
import AccountSection from "./AccountSection";
import AccountNavigation from "./AccountNavigation";

const AccountPage = () => {
  const user = useAtomValue(userAtom);
  return (
    <main className="max-w-[1170px] mx-auto mt-20 mb-35 px-4 lg:px-0">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-3 items-center">
          <NavLink to={HOMEPAGE} className="text-[#00000080] text-sm">
            Home
          </NavLink>
          <div className="border border-[#00000080] rotate-[117.05deg] w-3 h-0"></div>
          <NavLink
            to={USER_PROFILE}
            className={({ isActive }) =>
              `${isActive ? "text-sm" : "text-[#00000080] text-sm"}`
            }
          >
            My Account
          </NavLink>
        </div>

        <p className="text-sm">
          Welcome! <span className="text-[#DB4444]">{user?.firstName}</span>
        </p>
      </div>

      <div className="flex flex-row gap-25 mt-20 justify-between">
        <AccountNavigation />
        <div className="w-[870px] shadow-[0_1px_13px_0_#0000000D]
">
          <AccountSection />
        </div>
      </div>
    </main>
  );
};

export default AccountPage;
