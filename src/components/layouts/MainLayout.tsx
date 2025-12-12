import PostLoginHeaderSection from "../HeaderSection/PostLoginHeaderSection";
import { Outlet } from "react-router-dom";
import FooterSection from "../FooterSection/FooterSection";

const MainLayout = () => {
  return (
    <>
      <PostLoginHeaderSection />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default MainLayout;
