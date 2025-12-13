import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/GlobalDataContext";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </DataProvider>
);
