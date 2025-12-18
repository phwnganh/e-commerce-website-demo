import { HOMEPAGE, ACCOUNT } from "../../constants/route.constants";
import { useAtomValue } from "jotai";
import { userAtom } from "../../atom/store";
import AccountNavigation from "../../components/AccountComponent/AccountNavigation";
import AccountSectionLayout from "../../components/layouts/AccountSectionLayout";
import BreadCumb from "../../components/ui/BreadCumb";

const AccountPage = () => {
  const user = useAtomValue(userAtom);
  return (
    <main className="max-w-[1170px] mx-auto mb-35 px-4 lg:px-0">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <BreadCumb
          items={[
            {
              label: "Home",
              to: HOMEPAGE,
            },
            { label: "My Account", to: ACCOUNT },
          ]}
        />

        <p className="text-sm sm:mt-20">
          Welcome! <span className="text-button-2">{user?.firstName}</span>
        </p>
      </div>

      <div className="flex flex-row gap-25 mt-20 justify-between">
        <AccountNavigation />
        <AccountSectionLayout />
      </div>
    </main>
  );
};

export default AccountPage;
