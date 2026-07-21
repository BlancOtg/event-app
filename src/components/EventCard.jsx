
const EventCard = () => {
  return (
    <div className=" gap-5 p-4 rounded-lg shadow-md border border-gray-300">
        <div className="p-2 flex justify-between items-center">
            {/* left */}
            <div className="text-left gap-2 flex flex-col">
                <h3 className="font-bold">Event Name</h3>
                <p className="text-gray-400">Event description</p>
                <p className="text-gray-400">Event Date</p>
            </div>
            {/* right */}
            <div className="text-right flex flex-col gap-3 items-center">
                <span className="text-gray-200 border rounded-full bg-purple-300 border-gray-300 text-[13px] px-2 py-1">Event Category</span>
                <span className="text-gray-200 border rounded-full bg-purple-300 border-gray-300 text-[13px] px-2 py-1">Event Status</span>
                <p className="text-gray-400 text-[10px] ">Created at/Updated at</p>
            </div>
        </div>
    </div>
  )
}

export default EventCard
