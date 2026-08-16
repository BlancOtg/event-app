import { Link } from "react-router-dom";
import Button from "./Button";
import { Trash2, Edit } from "lucide-react";

const EventCard = ({ event, onDelete, onEdit }) => {
  const { id, name, description, date, category, status, createdAt, updatedAt } =
    event;

  return (
    <div className="gap-5 p-4 rounded-lg shadow-md border border-gray-300">
      <div className="p-2 flex justify-between items-center">
        {/* left */}
        <Link
          to={`/events/${id}`}
          className="text-left gap-2 flex flex-col hover:opacity-80"
        >
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-400">{description}</p>
          <p className="text-gray-400">{date}</p>
        </Link>
        {/* right */}
        <div className="text-right flex flex-col gap-3 items-end">
          <div className="flex gap-2 items-center justify-center">
            <span className="text-purple-900 border rounded-full bg-purple-200 border-purple-300 text-[13px] px-2 py-1">
              {category}
            </span>
            <span className="text-purple-900 border rounded-full bg-purple-200 border-purple-300 text-[13px] px-2 py-1">
              {status}
            </span>
          </div>

          <p className="text-gray-400 text-[10px]">
            {updatedAt ? `updated ${updatedAt}` : `created ${createdAt}`}
          </p>
          <div className="flex gap-2">
            <Button
              onClick={onEdit}
              aria-label={`Edit ${name}`}
              className="bg-transparent hover:bg-purple-100 px-2"
            >
              <Edit className="text-(--accent)" />
            </Button>
            <Button
              onClick={onDelete}
              aria-label={`Delete ${name}`}
              className="bg-transparent hover:bg-red-200 px-2"
            >
              <Trash2 className="text-[#ef4444]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
