import { useState } from "react";
import Button from "../Button";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
import { useEventStore } from "../../store/events.store";
const EventForm = () => {
  const createEvent = useEventStore((state) => state.addEvent);
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    category: "",
    status: "",
  });

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

    createEvent(data);
    toast.success("Event created successfully");

    setData({
      name: "",
      date: "",
      location: "",
      description: "",
      category: "",
      status: "",
    });
    
  navigate("/events");
    

  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-4 rounded shadow-xl"
      >
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="name" className="flex text-left">
            Event Name
          </label>
          <input
            placeholder="name"
            type="text"
            name="name"
            id="name"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="date" className="flex text-left">
            Event Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="border border-gray-300 rounded p-2 w-full"
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="location" className="flex text-left">
            Event Location
          </label>
          <input
            placeholder="Event Location"
            type="text"
            name="location"
            id="location"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, location: e.target.value })}
          />
        </div>
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="description" className="flex text-left">
            Event Description
          </label>
          <textarea
            placeholder="Event Description ...."
            name="description"
            id="description"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></textarea>
        </div>
        <div className="p-2 flex flex-row gap-2 justify-between">
          <div className="p-2 flex flex-col gap-2 w-2xl">
            <label htmlFor="category" className="flex text-left">
              Event Category
            </label>
            <select
              name="category"
              id="category"
              className="border border-gray-300 rounded p-2 w-full"
              onChange={(e) => setData({ ...data, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="conference">Conference</option>
              <option value="workshop">Workshop</option>
              <option value="meetup">Meetup</option>
              <option value="webinar">Webinar</option>
            </select>
          </div>
          <div className="p-2 flex flex-col w-2xl gap-2">
            <label htmlFor="status" className="flex text-left">
              Event Status
            </label>
            <select
              name="status"
              id="status"
              className="border border-gray-300 rounded p-2 w-full"
              onChange={(e) => setData({ ...data, status: e.target.value })}
            >
              <option value="">Select a status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="p-2 gap-2">
          <Button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded-[3%]"
          >
            Create Event +
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
