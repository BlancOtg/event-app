import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Delete, Edit } from "lucide-react";

const EventCard = ({ event, onDelete, onEdit }) => {
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
  const {
    id,
    name,
    description,
    date,
    category,
    status,
    createdAt,
    updatedAt,
  } = event;
  return (
    <div className=" gap-5 p-4 rounded-lg shadow-md border border-gray-300">
      <div className="p-2 flex justify-between items-center">
        {/* left */}
        <div
          onClick={() => navigate(`/events/${id}`)}
          className="text-left  gap-2 flex flex-col"
        >
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-400">{date}</p>
        </div>
        {/* right */}
        <div className="text-right  gap-3 items-center">
          <div className="flex h-lg items-center justify-center">
            <span className="text-gray-200 border rounded-full bg-purple-300 border-gray-300 text-[13px] px-2 py-1">
              {category}
            </span>
            <span className="text-gray-200 border rounded-full bg-purple-300 border-gray-300 text-[13px] px-2 py-1">
              {status}
            </span>
          </div>

          <p className="text-gray-400 text-[10px] gap-1">
            {updatedAt ? `updated ${updatedAt}` : `created ${createdAt}`}
          </p>
          <Button onClick={onEdit} className="bg-no">
            <Edit className="text-(--accent)" />
          </Button>
          <Button onClick={onDelete} className="bg-no hover:bg-red-200">
            
            <Delete className="text-[#ef4444]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
