import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import Login from "./pages/login";
import RootLayout from "./components/layout/RootLayout";
import Events from "./pages/Events";
import NewEvents from "./pages/NewEvents";
import LogOut from "./pages/LogOut";
import EventDetail from "./pages/EventDetail";

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
        path: "/events",
        element: <Events />
      },
      {
        path: "/events/new",
        element: <NewEvents />
      },
      {
        path: "/events/:id",
        element: <EventDetail />
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
