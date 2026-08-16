import { useState } from "react";
import Button from "../Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEventStore } from "../../store/events.store";

const CATEGORIES = ["conference", "workshop", "meetup", "webinar"];
const STATUSES = ["upcoming", "ongoing", "completed"];

const withCurrent = (options, value) =>
  value && !options.includes(value) ? [value, ...options] : options;

const emptyEvent = {
  name: "",
  date: "",
  location: "",
  description: "",
  category: "",
  status: "",
};

const EventForm = ({ event }) => {
  const createEvent = useEventStore((state) => state.addEvent);
  const updateEvent = useEventStore((state) => state.updateEvent);
  const navigate = useNavigate();

  const [data, setData] = useState(() =>
    event ? { ...emptyEvent, ...event } : emptyEvent,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !data.name ||
      !data.date ||
      !data.location ||
      !data.description ||
      !data.category ||
      !data.status
    ) {
      toast.warning("Please fill in all fields");
      return;
    }

    if (event) {
      updateEvent(event.id, data);
      toast.success("Event updated successfully");
      navigate(`/events/${event.id}`);
      return;
    }

    createEvent(data);
    toast.success("Event created successfully");
    setData(emptyEvent);
    navigate("/events");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-4 rounded shadow-xl"
      >
        <div className="p-2 flex flex-col gap-2">
          <label htmlFor="name" className="flex text-left">
            Event Name
          </label>
          <input
            placeholder="name"
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded p-2 w-full"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="p-2 flex flex-col gap-2">
          <label htmlFor="date" className="flex text-left">
            Event Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="border border-gray-300 rounded p-2 w-full"
            value={data.date}
            onChange={handleChange}
          />
        </div>
        <div className="p-2 flex flex-col gap-2">
          <label htmlFor="location" className="flex text-left">
            Event Location
          </label>
          <input
            placeholder="Event Location"
            type="text"
            name="location"
            id="location"
            className="border border-gray-300 rounded p-2 w-full"
            value={data.location}
            onChange={handleChange}
          />
        </div>
        <div className="p-2 flex flex-col gap-2">
          <label htmlFor="description" className="flex text-left">
            Event Description
          </label>
          <textarea
            placeholder="Event Description ...."
            name="description"
            id="description"
            className="border border-gray-300 rounded p-2 w-full"
            value={data.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="p-2 flex flex-row gap-2 justify-between">
          <div className="p-2 flex flex-col gap-2 w-full">
            <label htmlFor="category" className="flex text-left">
              Event Category
            </label>
            <select
              name="category"
              id="category"
              className="border border-gray-300 rounded p-2 w-full"
              value={data.category}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {withCurrent(CATEGORIES, data.category).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="p-2 flex flex-col gap-2 w-full">
            <label htmlFor="status" className="flex text-left">
              Event Status
            </label>
            <select
              name="status"
              id="status"
              className="border border-gray-300 rounded p-2 w-full"
              value={data.status}
              onChange={handleChange}
            >
              <option value="">Select a status</option>
              {withCurrent(STATUSES, data.status).map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-2 gap-2">
          <Button type="submit" className="w-full">
            {event ? "Save Changes" : "Create Event +"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
