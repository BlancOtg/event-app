import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import RootLayout from "./components/layout/RootLayout";
import Events from "./pages/Events";
import NewEvents from "./pages/NewEvents";
import EditEvent from "./pages/EditEvent";
import LogOut from "./pages/auth/LogOut";
import EventDetail from "./pages/EventDetail";
import AuthLayout from "./components/layout/AuthLayout";
import RequireAuth from "./components/layout/RequireAuth";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: "events",
            element: <Events />,
          },
          {
            path: "events/new",
            element: <NewEvents />,
          },
          {
            path: "events/:id",
            element: <EventDetail />,
          },
          {
            path: "events/:id/edit",
            element: <EditEvent />,
          },
        ],
      },
      {
        path: "logout",
        element: <LogOut />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
