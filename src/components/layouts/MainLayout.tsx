import PostLoginHeaderSection from "../HeaderSection/PostLoginHeaderSection";
import { Outlet } from "react-router-dom";
import FooterSection from "../FooterSection/FooterSection";
import { Suspense } from "react";
import LoadingSpin from "../ui/LoadingSpin";

const MainLayout = () => {
  return (
    <>
      <PostLoginHeaderSection />
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <LoadingSpin />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <FooterSection />
    </>
  );
};

export default MainLayout;
