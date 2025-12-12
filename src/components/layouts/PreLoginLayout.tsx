import { Outlet } from "react-router-dom";
import FooterSection from "../FooterSection/FooterSection";
import PostLoginHeaderSection from "../HeaderSection/PostLoginHeaderSection";

const PreLoginLayout = () => {
  return (
    <>
      <PostLoginHeaderSection />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default PreLoginLayout;
