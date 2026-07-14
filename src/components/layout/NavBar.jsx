import { Calendars } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { Link } from 'react-router';
const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-around items-center p-2 border-b border-gray-300">
      <div className="p-2 flex flex-wrap gap-4 items-center">
        <Link to="/" className="flex gap-2 items-center"> <Calendars w-6 h-6/> Event App </Link>

      </div>

      <div className="p-2 flex flex-wrap gap-4">
        <Link to="/Events">My Event</Link>
        <Link to="/NewEvents">Create Event</Link>
        <div className="2xl">Hi Emmanuel</div>
        <Link to="/LogOut" className="gap-2.5 flex">Logout <LogOut className="w-6 h-6 gap-1.5" /></Link>
        
      </div>
    </div>
  )
}

export default NavBar

