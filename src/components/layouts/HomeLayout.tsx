import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main className="max-w-[1170px] mx-auto">
        <Outlet/>
    </main>
  );
};

export default HomeLayout;
