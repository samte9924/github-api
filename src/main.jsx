import "./styles/index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage.jsx";
import Root from "./routes/Root.jsx";
import UserPage from "./routes/UserPage.jsx";
import ReposPage from "./routes/ReposPage.jsx";
import EventsPage from "./routes/EventsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/users/:username",
        element: <UserPage />,
      },
      {
        path: "/users/:username/repos/:page",
        element: <ReposPage />,
      },
      {
        path: "/users/:username/events",
        element: <EventsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

/* To-do
  - Breadcrumbs on top of Root page outlet
  - Implement debounced fetch
  - Error handling (context)
  - global isLoading state (context)
  - Pagination as a component
  - Style Repository.jsx items
  - Add card footer
  - Center the spinner
  - Better router structure (?)
*/
