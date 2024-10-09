import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Root from "./routes/Root.jsx";
import About from "./routes/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
