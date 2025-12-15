import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import {
  ABOUT,
  ACCOUNT,
  ADDRESS_BOOK,
  CANCELLATIONS,
  CART,
  CATEGORYPAGE,
  CONTACT,
  HOMEPAGE,
  LOGIN,
  PAYMENT_OPTION,
  PRODUCTPAGE,
  RETURNS,
  SIGNUP,
  USER_PROFILE,
  WISHLIST,
} from "../constants/route.constants";

const NotFound = lazy(() => import("../pages/NotFoundPage/NotFound"))
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
const AccountSection = lazy(
  () => import("../components/AccountComponent/accounts/AccountSection")
);
const AddressBookSection = lazy(
  () => import("../components/AccountComponent/accounts/AddressBookSection")
);
const PaymentOptionSection = lazy(
  () => import("../components/AccountComponent/accounts/PaymentOptionSection")
);
const ReturnSection = lazy(
  () => import("../components/AccountComponent/accounts/ReturnSection")
);
const CancellationSection = lazy(
  () => import("../components/AccountComponent/accounts/CancellationSection")
);
const CategoryListPage = lazy(
  () => import("../pages/CategoryListPage/CategoryListPage")
);
const CaategoryProductListPage = lazy(
  () => import("../pages/ProductListPage/CategoryProductListPage")
);

const HomeProductListPage = lazy(
  () => import("../pages/ProductListPage/HomeProductListPage")
);
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
          <Route path={CATEGORYPAGE} element={<CategoryListPage />} />
          <Route path={PRODUCTPAGE} element={<HomeProductListPage />} />
          <Route
            path={`${PRODUCTPAGE}/:slug`}
            element={<CaategoryProductListPage />}
          />
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
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
