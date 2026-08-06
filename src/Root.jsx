import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import RootLayout from "./components/layout/RootLayout";
import Events from "./pages/Events";
import NewEvents from "./pages/NewEvents";
import LogOut from "./pages/auth/LogOut";
import EventDetail from "./pages/EventDetail";
import AuthLayout from "./components/layout/AuthLayout";
import Register from "./pages/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/new",
        element: <NewEvents />,
      },
      {
        path: "/events/:id",
        element: <EventDetail />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
