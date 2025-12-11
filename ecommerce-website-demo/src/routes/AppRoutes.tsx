import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  ABOUT,
  ACCOUNT,
  ADDRESS_BOOK,
  CANCELLATIONS,
  CART,
  CONTACT,
  HOMEPAGE,
  LOGIN,
  PAYMENT_OPTION,
  RETURNS,
  SIGNUP,
  USER_PROFILE,
  WISHLIST,
} from "../constants/route.constants";
import AccountSection from "../pages/AccountPage/accounts/AccountSection";
import AddressBookSection from "../pages/AccountPage/accounts/AddressBookSection";
import PaymentOptionSection from "../pages/AccountPage/accounts/PaymentOptionSection";
import ReturnSection from "../pages/AccountPage/accounts/ReturnSection";
import CancellationSection from "../pages/AccountPage/accounts/CancellationSection";

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
const AccountPage = lazy(() => import("../pages/AccountPage/AccountPage"));
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
          <Route path={ACCOUNT} element={<AccountPage />}>
            <Route index element={<AccountSection />} />
            <Route path={USER_PROFILE} element={<AccountSection />} />
            <Route path={ADDRESS_BOOK} element={<AddressBookSection />} />
            <Route path={PAYMENT_OPTION} element={<PaymentOptionSection />} />
            <Route path={RETURNS} element={<ReturnSection />} />
            <Route path={CANCELLATIONS} element={<CancellationSection />} />
          </Route>

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
