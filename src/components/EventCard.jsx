import { useNavigate } from "react-router-dom";

const EventCard = ({event}) => {
    
    // const event = {
    //     name: "Event Name",
    //     description: "Event description",
    //     date: "Event Date",
    //     category: "Event Category",
    //     status: "Event Status",
    //     createdAt: "Created at",
    //     updatedAt: "Updated at"
    // }
    
    const navigate = useNavigate();
    const { id ,name, description, date, category, status, createdAt, updatedAt } =
      event;
  return (
    <div className=" gap-5 p-4 rounded-lg shadow-md border border-gray-300" onClick={() => navigate(`/events/${id}`)}>
      <div className="p-2 flex justify-between items-center">
        {/* left */}
        <div className="text-left gap-2 flex flex-col">
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-400">{date}</p>
        </div>
        {/* right */}
        <div className="text-right flex flex-col gap-3 items-center">
          <span className="text-gray-200 border rounded-full bg-purple-300 border-gray-300 text-[13px] px-2 py-1">
            {category}
          </span>
          <span className="text-gray-200 border rounded-full bg-purple-300 border-gray-300 text-[13px] px-2 py-1">
            {status}
          </span>
          <p className="text-gray-400 text-[10px] gap-1">
            {updatedAt ? `updated ${updatedAt}` : `created ${createdAt}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
