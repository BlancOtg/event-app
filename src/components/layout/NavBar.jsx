import { Calendars, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSessionStore from "../../store/session.store";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const user = useSessionStore((state) => state.user);

  const links = (
    <>
      <Link to="/events" onClick={() => setIsVisible(false)}>
        My Event
      </Link>
      <Link to="/events/new" onClick={() => setIsVisible(false)}>
        Create Event
      </Link>
      {user ? (
        <>
          <div>Hi {user.name}</div>
          <Link
            to="/logout"
            onClick={() => setIsVisible(false)}
            className="gap-2.5 flex items-center"
          >
            Logout <LogOut className="w-6 h-6" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" onClick={() => setIsVisible(false)}>
            Login
          </Link>
          <Link to="/register" onClick={() => setIsVisible(false)}>
            Register
          </Link>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="flex flex-wrap justify-around items-center p-2 border-b border-gray-300">
        <div className="p-2 flex flex-wrap gap-4 items-center">
          <Link to="/" className="flex gap-2 items-center">
            <Calendars className="cursor-pointer" /> Event App
          </Link>
        </div>
        <div className="p-2">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isVisible}
            className="lg:hidden"
            onClick={() => setIsVisible(!isVisible)}
          >
            <Menu className="cursor-pointer" />
          </button>
        </div>
        <div className="hidden lg:flex flex-wrap p-2 gap-4 items-center">
          {links}
        </div>
      </div>
      {isVisible && (
        <div
          style={{ backgroundColor: "var(--bg)" }}
          className="p-4 text-right flex justify-end flex-col lg:hidden gap-4 absolute top-0 right-0"
        >
          <button
            type="button"
            aria-label="Close navigation menu"
            className="self-end mx-5"
            onClick={() => setIsVisible(false)}
          >
            <X className="cursor-pointer" />
          </button>
          {links}
        </div>
      )}
    </div>
  );
};

export default NavBar;
