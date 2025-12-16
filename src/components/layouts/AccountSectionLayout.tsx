import { Outlet } from "react-router-dom";

const AccountSectionLayout = () => {
  return (
    <section
      className="w-full sm:w-[870px] shadow-[0_1px_13px_0_#0000000D]">
      <Outlet />
    </section>
  );
};

export default AccountSectionLayout;
