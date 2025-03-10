import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeProviders from "./Providers/ThemeProviders.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviders>
      <AuthProviders>
        <RouterProvider router={routes} />
      </AuthProviders>
    </ThemeProviders>
    <ToastContainer />
  </StrictMode>
);
