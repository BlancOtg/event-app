import EventCard from "../components/EventCard";
import {events} from "../data/event"

const Events= () => {
    const data = events;



  return (
    <div className="cursor-pointer">
      <div className="flex flex-col justify-start cursor-pointer lg:grid grid-cols-2 gap-4 " >
        {data.length > 0 ? (
          data.map((event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p>No events available.</p>
        )}
      </div>
    </div>
  )
}

export default Events
