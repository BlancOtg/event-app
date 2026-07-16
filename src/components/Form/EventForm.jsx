import { useState } from "react";
import Button from "../Button";
const EventForm = () => {
  const [data, setData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
  });

  return (
    <div>
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        console.log(data);
      }}
      className="flex flex-col gap-2 p-4 rounded shadow-md">
        <div className="p-2" flex flex-col gap-2>
          <label htmlFor="eventName" className="flex text-left">Event Name</label>
          <input
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
            name="eventDescription"
            id="eventDescription"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={(e) => setData({ ...data, eventDescription: e.target.value })}
          ></textarea>
        </div>
        <div className="p-2 flex justify-end gap-2">
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
