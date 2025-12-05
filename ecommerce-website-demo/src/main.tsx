import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./components/HomePage/HomePage";
import "./index.css";
import SignupPage from "./components/PreLoginPage/SignupPage";
import LoginPage from "./components/PreLoginPage/LoginPage";
import WishlistPage from "./components/WishlistPage/WishlistPage";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
