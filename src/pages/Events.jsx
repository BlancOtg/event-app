import EventCard from "../components/EventCard";

const Events = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  )
}

export default Events
