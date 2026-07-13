import { Calendars } from 'lucide-react';
import { LogOut } from 'lucide-react';
const NavBar = () => {
  return (
    <div className="flex flex-wrap justify-around items-center p-2 border-b border-gray-300">
      <div className="p-2 flex flex-wrap gap-4 items-center">
        <Calendars className="w-6 h-6 caret-fuchsia-800 " />
        <h3>Event App</h3>
      </div>

      <div className="p-2 flex flex-wrap gap-4">
        <a href="/my-events">My Event</a>
        <a href="/create-event">Create Event</a>
        <div className="2xl">Hi Emmanuel</div>
        <a href="/logout" className="gap-0.5">Logout</a>
        <LogOut className="w-6 h-6 gap-0.5" />
      </div>
    </div>
  )
}

export default NavBar

