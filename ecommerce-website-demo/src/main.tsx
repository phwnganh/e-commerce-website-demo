import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage/HomePage";
import "./index.css";
import SignupPage from "./pages/PreLoginPage/SignupPage";
import LoginPage from "./pages/PreLoginPage/LoginPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
