import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import {
  CART,
  HOMEPAGE,
  LOGIN,
  SIGNUP,
  WISHLIST,
} from "../constants/route.constants";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

const LoginPage = lazy(() => import("../pages/PreLoginPage/LoginPage"));
const SignupPage = lazy(() => import("../pages/PreLoginPage/SignupPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const WishlistPage = lazy(
  () => import("../pages/WishlistPage/WishlistPage")
);
const CartPage = lazy(() => import("../pages/CartPage/CartPage"));
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignupPage />} />
      <Route path={WISHLIST} element={<WishlistPage />} />
      <Route path={CART} element={<CartPage />} />
      <Route path={HOMEPAGE} element={<HomePage />} />
      <Route path={`${HOMEPAGE}/:productId`} element={<ProductDetailPage />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
