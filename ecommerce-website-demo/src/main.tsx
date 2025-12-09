import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/GlobalDataContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
