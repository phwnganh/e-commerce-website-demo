import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import {
  CART,
  HOMEPAGE,
  LOGIN,
  SIGNUP,
  WISHLIST,
} from "../constants/route.constants";
import ProductDetailPage from "../components/ProductDetailPage/ProductDetailPage";

const LoginPage = lazy(() => import("../components/PreLoginPage/LoginPage"));
const SignupPage = lazy(() => import("../components/PreLoginPage/SignupPage"));
const HomePage = lazy(() => import("../components/HomePage/HomePage"));
const WishlistPage = lazy(
  () => import("../components/WishlistPage/WishlistPage")
);
const CartPage = lazy(() => import("../components/CartPage/CartPage"));
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
