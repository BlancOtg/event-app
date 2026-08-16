import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import EventForm from "../components/Form/EventForm";
import { useEventStore } from "../store/events.store";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = useEventStore((state) => state.eventById(id));

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="text-6xl">🔍</div>
        <h2
          className="text-2xl font-semibold"
          style={{ color: "var(--text-h)" }}
        >
          Event Not Found
        </h2>
        <Button onClick={() => navigate("/events")}>← Back to Events</Button>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Event</h1>
      <EventForm event={event} />
    </div>
  );
};

export default EditEvent;
