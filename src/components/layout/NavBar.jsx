import { Calendars, X } from "lucide-react";
import { useState } from "react";
import Button from "../Button";
import { Menu } from "lucide-react";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
const NavBar = () => {
  const { session, isAuthenticated, logout } = useAuth();
  console.log(session, isAuthenticated());

  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap justify-around items-center p-2 border-b border-gray-300">
        <div className="p-2 flex flex-wrap gap-4 items-center">
          <Link to="/" className="flex gap-2 items-center">
            {" "}
            <Calendars className="cursor-pointer " /> Event App{" "}
          </Link>
        </div>
        <div className="p-2">
          <Menu
            className="relative cursor-pointer inline-block text-left lg:hidden"
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>
        <div className="hidden lg:flex flex-wrap p-2 gap-4">
          <Link to="/events">My Event</Link>
          <Link to="/events/new">Create Event</Link>

         {isAuthenticated() ? (
          <>
          <p className="text-gray-800 dark:text-(--text)">Welcome {session.name.split("")[0]}</p>
          <Button onClick={logout}><LogOut /></Button>
          </>
         ) : (
          <Link to="/login">
            <p className="text-gray-800 dark:text-(--text) px-2 border-2 rounded-2xl border-(--accent)">
              login
            </p>
            </Link>
         )}

          
        </div>
      </div>
      {isVisible && (
        <div
          style={{ backgroundColor: "var(--bg)" }}
          className="p-4 text-right  flex justify-end flex-col lg:hidden gap-4 absolute top-0 right-0 "
        >
          <X
            className=" cursor-pointer mx-5"
            onClick={() => setIsVisible(!isVisible)}
          />
          <Link to="/events">My Event</Link>
          <Link to="/events/new">Create Event</Link>
          <LogOut className="w-6 h-6 gap-1.5" />
        </div>
      )}
    </div>
  );
};

export default NavBar;
