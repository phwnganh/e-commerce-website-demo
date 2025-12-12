import { NavLink } from "react-router-dom";
import { HOMEPAGE, ACCOUNT } from "../../constants/route.constants";
import { useAtomValue } from "jotai";
import { userAtom } from "../../atom/store";
import AccountNavigation from "./AccountNavigation";
import AccountSectionLayout from "../../components/layouts/AccountSectionLayout";

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
            to={ACCOUNT}
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
        <AccountSectionLayout/>
      </div>
    </main>
  );
};

export default AccountPage;
