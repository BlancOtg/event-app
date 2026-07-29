import EventCard from "../components/EventCard";
import {events} from "../data/event"
import { useEvent } from "../Hooks/useEvent.hook";

const Events= () => {
    const data = events;
    const {eventsData, loading,error} = useEvent();


  return (
    <div className="cursor-pointer">
      <div className="flex flex-col justify-start cursor-pointer lg:grid grid-cols-2 gap-4 " >
      {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 text-lg font-bold">Loading Events...</p>
          </div>
      ): error ? (
                  <div className="flex justify-center items-center h-40">
            <p className="text-red-500 text-lg font-bold">Error: {error}</p>
          </div>
      ): eventsData.length > 0 ? (
        eventsData.map((event) => <EventCard key={event.id} event={event} /> )
      ) :(
                  <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 text-lg font-bold">No Events Found</p>
          </div>
      )}
      </div>
    </div>
  )
}

export default Events
