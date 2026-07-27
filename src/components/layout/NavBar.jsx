import { Calendars, X } from "lucide-react";
import { useState } from "react";
import { Menu } from "lucide-react";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <div className="flex flex-wrap justify-around items-center p-2 border-b border-gray-300">
        <div className="p-2 flex flex-wrap gap-4 items-center">
          <Link to="/" className="flex gap-2 items-center">
            {" "}
            <Calendars w-6 h-6 /> Event App{" "}
          </Link>
        </div>
        <div className="p-2">
          <Menu
            className="relative inline-block text-left lg:hidden"
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>
        <div className="hidden lg:flex flex-wrap p-2 gap-4">
          <Link to="/events">My Event</Link>
          <Link to="/events/new">Create Event</Link>
          <div className="2xl">Hi Emmanuel</div>
          <Link to="/LogOut" className="gap-2.5 flex">
            Logout <LogOut className="w-6 h-6 gap-1.5" />
          </Link>
        </div>
      </div>
      {isVisible && (
        <div 
        style={{ backgroundColor: "var(--bg)" }}
        className="p-4 text-right  flex justify-end flex-col lg:hidden gap-4 absolute top-0 right-0 ">
            <X className=" mx-5" onClick={ () => setIsVisible(!isVisible)} />
          <Link to="/events">My Event</Link>
          <Link to="/events/new">Create Event</Link>
          <div className="2xl">Hi Emmanuel</div>
          <Link to="/LogOut" className="gap-2.5 justify-end flex">
            Logout <LogOut className="w-6 h-6 gap-1.5" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
