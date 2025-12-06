import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import {
  HOMEPAGE,
  LOGIN,
  SIGNUP,
  WISHLIST,
} from "../constants/route.constants";

const LoginPage = lazy(() => import("../components/PreLoginPage/LoginPage"));
const SignupPage = lazy(() => import("../components/PreLoginPage/SignupPage"));
const HomePage = lazy(() => import("../components/HomePage/HomePage"));
const WishlistPage = lazy(
  () => import("../components/WishlistPage/WishlistPage")
);
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignupPage />} />
      <Route path={WISHLIST} element={<WishlistPage />} />
      <Route path={HOMEPAGE} element={<HomePage />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;
