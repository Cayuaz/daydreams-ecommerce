import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
