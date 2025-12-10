import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/GlobalDataContext";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <DataProvider>
          <AppRoutes />
      </DataProvider>
    </BrowserRouter>
);
