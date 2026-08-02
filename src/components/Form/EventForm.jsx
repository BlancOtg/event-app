import { useState } from "react";
import Button from "../Button";
const EventForm = () => {
  const [data, setData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
    eventCategory: "",
    eventStatus: "",
  });

  return (
    <div>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        console.log(data);
      }}
      className="flex flex-col gap-2 p-4 rounded shadow-xl">
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="eventName" className="flex text-left">Event Name</label>
          <input
            placeholder="EventName"
            type="text"
            name="eventName"
            id="eventName"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, eventName: e.target.value })}
          />
        </div>
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="eventDate" className="flex text-left">Event Date</label>
          <input
            type="date"
            name="eventDate"
            id="eventDate"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, eventDate: e.target.value })}
          />
        </div>
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="eventLocation" className="flex text-left">Event Location</label>
          <input
          placeholder="Event Location"
            type="text"
            name="eventLocation"
            id="eventLocation"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, eventLocation: e.target.value })}
          />
        </div>
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="eventDescription" className="flex text-left">Event Description</label>
          <textarea
            placeholder="Event Description ...."
            name="eventDescription"
            id="eventDescription"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, eventDescription: e.target.value })}
          ></textarea>
        </div>
        <div className="p-2 flex flex-row gap-2 justify-between">

        <div className="p-2 flex flex-col gap-2 w-2xl">
          <label htmlFor="eventCategory" className="flex text-left">Event Category</label>
          <select
            name="eventCategory"
            id="eventCategory"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, eventCategory: e.target.value })}
          >
            <option value="">Select a category</option>
            <option value="conference">Conference</option>
            <option value="workshop">Workshop</option>
            <option value="meetup">Meetup</option>
            <option value="webinar">Webinar</option>
          </select>            
        </div>
        <div className="p-2 flex flex-col w-2xl gap-2">
          <label htmlFor="eventStatus" className="flex text-left">Event Status</label>
          <select
            name="eventStatus"
            id="eventStatus"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, eventStatus: e.target.value })}
          >
            <option value="">Select a status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        </div>
        
        <div className="p-2 gap-2">
          <Button type="submit" className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded-[3%]">
            Create Event +
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
