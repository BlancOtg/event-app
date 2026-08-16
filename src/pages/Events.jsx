import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import { useEventStore } from "../store/events.store";

const Events = () => {
  const navigate = useNavigate();
  const events = useEventStore((state) => state.events);
  const deleteEvent = useEventStore((state) => state.deleteEvent);

  return (
    <div>
      <div className="flex flex-col justify-start lg:grid grid-cols-2 gap-4 ">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={() => navigate(`/events/${event.id}/edit`)}
              onDelete={() => deleteEvent(event.id)}
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
