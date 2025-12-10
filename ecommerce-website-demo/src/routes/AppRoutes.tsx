import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  ABOUT,
  CART,
  CONTACT,
  HOMEPAGE,
  LOGIN,
  SIGNUP,
  USER_PROFILE,
  WISHLIST,
} from "../constants/route.constants";

const MainLayout = lazy(() => import("../components/layouts/MainLayout"));
const LoginPage = lazy(() => import("../pages/PreLoginPage/LoginPage"));
const SignupPage = lazy(() => import("../pages/PreLoginPage/SignupPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const WishlistPage = lazy(() => import("../pages/WishlistPage/WishlistPage"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));
const ProductDetailPage = lazy(
  () => import("../pages/ProductDetailPage/ProductDetailPage")
);
const ContactPage = lazy(() => import("../pages/ContactPage/ContactPage"));
const AboutUsPage = lazy(() => import("../pages/AbouUsPage/AbouUsPage"));
const AccountPage = lazy(() => import("../pages/UserProfilePage/AccountPage"));
const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <>
          <svg className="size-10 animate-spin" viewBox="0 0 24 24"></svg>
        </>
      }
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={SIGNUP} element={<SignupPage />} />
          <Route path={WISHLIST} element={<WishlistPage />} />
          <Route path={CART} element={<CartPage />} />
          <Route path={CONTACT} element={<ContactPage />} />
          <Route path={ABOUT} element={<AboutUsPage />} />
          <Route path={USER_PROFILE} element={<AccountPage />} />
          <Route path={HOMEPAGE} element={<HomePage />} />
          <Route
            path={`${HOMEPAGE}/:productId`}
            element={<ProductDetailPage />}
          />
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
