import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import {
  CART,
  HOMEPAGE,
  LOGIN,
  SIGNUP,
  USER_PROFILE,
  WISHLIST,
} from "../constants/route.constants";

const LoginPage = lazy(() => import("../pages/PreLoginPage/LoginPage"));
const SignupPage = lazy(() => import("../pages/PreLoginPage/SignupPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const WishlistPage = lazy(() => import("../pages/WishlistPage/WishlistPage"));
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));
const ProductDetailPage = lazy(
  () => import("../pages/ProductDetailPage/ProductDetailPage")
);
const AccountPage = lazy(() => import("../pages/UserProfilePage/AccountPage"));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignupPage />} />
      <Route path={WISHLIST} element={<WishlistPage />} />
      <Route path={CART} element={<CartPage />} />
      <Route path={USER_PROFILE} element={<AccountPage />} />
      <Route path={HOMEPAGE} element={<HomePage />} />
      <Route path={`${HOMEPAGE}/:productId`} element={<ProductDetailPage />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
