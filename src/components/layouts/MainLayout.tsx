import PostLoginHeaderSection from "../HeaderSection/PostLoginHeaderSection";
import { Outlet, useLocation } from "react-router-dom";
import FooterSection from "../FooterSection/FooterSection";
import { Suspense } from "react";
import LoadingSpin from "../ui/LoadingSpin";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};
const MainLayout = () => {
  const location = useLocation();
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
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <FooterSection />
    </>
  );
};

export default MainLayout;
