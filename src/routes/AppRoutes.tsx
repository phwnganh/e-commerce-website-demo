import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import {
  ABOUT,
  ACCOUNT,
  ADDRESS_BOOK,
  CANCELLATIONS,
  CART,
  CATEGORYPAGE,
  CHECKOUT,
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

const NotFound = lazy(() => import("../pages/NotFoundPage"));
const MainLayout = lazy(() => import("../components/layouts/MainLayout"));
const LoginPage = lazy(() => import("../pages/PreLoginPage/LoginPage"));
const SignupPage = lazy(() => import("../pages/PreLoginPage/SignupPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const WishlistPage = lazy(() => import("../pages/WishlistPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ProductDetailPage = lazy(() => import("../pages/ProductDetailPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const AboutUsPage = lazy(() => import("../pages/AbouUsPage"));
const AccountPage = lazy(() => import("../pages/AccountPage"));
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
const CategoryListPage = lazy(() => import("../pages/CategoryListPage"));
const CaategoryProductListPage = lazy(
  () => import("../pages/ProductListPage/CategoryProductListPage")
);

const HomeProductListPage = lazy(
  () => import("../pages/ProductListPage/HomeProductListPage")
);

const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const AppRoutes = () => {
  return (
    // bản chất lazy là code-splitting, cải thiện hiệu suất tải trang và trải nghiệm người dùng. vào trong 1 page được lazy có 2 component (nếu 2 component đó không bọc mỗi component 1 suspense thì sẽ render tuần tự, component nào trên đầu thì gọi trước, component sau gọi sau)
    // còn nếu wrap toàn bộ component trong 1 suspense thì sẽ load 2 component đó cùng lúc -> render UI
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
        <Route path={CHECKOUT} element={<CheckoutPage />} />
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
