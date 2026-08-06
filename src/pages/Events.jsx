import EventCard from "../components/EventCard";
import { events } from "../data/event";
import { useEvent } from "../Hooks/useEvent.hook";
import { useEventStore } from "../store/events.store";

const Events = () => {

  const events = useEventStore((state) => state.events);
  const loading = useEventStore((state) => state.loading);
  const error = useEventStore((state) => state.error);
  const deleteEvent = useEventStore((state) => state.deleteEvent);
  const updateEvent = useEventStore((state) => state.updateEvent);


  return (
    <div className="cursor-pointer">
      <div className="flex flex-col justify-start cursor-pointer lg:grid grid-cols-2 gap-4 ">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 text-lg font-bold">Loading Events...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-red-500 text-lg font-bold">Error: {error}</p>
          </div>
        ) : events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={() => {
                updateEvent(event.id);
              }}
              onDelete={() => {
                deleteEvent(event.id);
              }}
            />
          ))
        ) : (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 text-lg font-bold">No Events Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
