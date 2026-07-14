import {createBrowserRouter, RouterProvider} from "react-router"
import Home from './pages/Home';
import Login from "./pages/login";
import RootLayout from "./components/layout/RootLayout";
import Events from "./pages/Events";
import NewEvents from "./pages/NewEvents";
import LogOut from "./pages/LogOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/Events",
        element: <Events />
      },
      {
        path: "/NewEvents",
        element: <NewEvents />
      },
      {
        path: "/logout",
        element: <LogOut />
      }
    ]
  }


])

function Root() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default Root
