import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        lazy: () => import("./routes/Home.tsx"),
      },
      {
        path: "/about",
        lazy: () => import("./routes/About.tsx"),
      },
      {
        path: "/products/page/:pageNumber",
        lazy: () => import("./routes/Products.tsx"),
      },
      {
        path: "/products/:id",
        lazy: () => import("./routes/Product.tsx"),
      },
      {
        path: "/products/category/:categoryName/:pageNumber",
        lazy: () => import("./routes/ProductsByCategory.tsx"),
      },
      {
        path: "/auth/login",
        lazy: () => import("./routes/Login.tsx"),
      },
      {
        path: "auth/register",
        lazy: () => import("./routes/Register.tsx"),
      },
      {
        path: "/profile",
        lazy: () => import("./routes/Profile.tsx"),
      },
      {
        path: "/shop-cart",
        lazy: () => import("./routes/ShopCart.tsx"),
      },
      {
        path: "*",
        element: <Navigate to={"/"} replace />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
