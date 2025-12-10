import { Outlet } from "react-router-dom";
import PostLoginHeaderSection from "../HeaderSection/PostLoginHeaderSection";
import FooterSection from "../FooterSection/FooterSection";

const PostLoginLayout = () => {
  return (
    <>
      <PostLoginHeaderSection />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default PostLoginLayout;
