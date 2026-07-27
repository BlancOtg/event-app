import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/event";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === Number(id));

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="text-6xl">🔍</div>
        <h2 className="text-2xl font-semibold" style={{ color: "var(--text-h)" }}>
          Event Not Found
        </h2>
        <p className="text-gray-400">The event you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate("/events")}
          className="px-6 py-2 rounded-full text-white font-medium cursor-pointer"
          style={{ background: "var(--accent)" }}
        >
          ← Back to Events
        </button>
      </div>
    );
  }

  const { name, description, date, category, status, location, createdAt, updatedAt } = event;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateTime = (dateStr) => {
    return new Date(dateStr).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => navigate("/events")}
        className="flex items-center gap-2 mb-6 text-sm font-medium cursor-pointer transition-opacity hover:opacity-70"
        style={{ color: "var(--accent)" }}
      >
        <span>←</span>
        <span>Back to Events</span>
      </button>

      {/* Main card */}
      <div
        className="rounded-xl overflow-hidden shadow-lg border"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "var(--bg)",
          boxShadow: "var(--shadow)",
        }}
      >
        {/* Header section */}
        <div
          className="p-8 pb-6 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="text-left flex-1 min-w-50">
              <h1
                className="text-3xl font-bold mb-3"
                style={{ color: "var(--text-h)" }}
              >
                {name}
              </h1>
              <div className="flex flex-wrap gap-2">
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                    borderColor: "var(--accent-border)",
                    border: "1px solid",
                  }}
                >
                  {category}
                </span>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                    borderColor: "var(--accent-border)",
                    border: "1px solid",
                  }}
                >
                  {status}
                </span>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--accent-bg)",
                    color: "var(--accent)",
                    borderColor: "var(--accent-border)",
                    border: "1px solid",
                  }}
                >
                  📍 {location}
                </span>
              </div>
            </div>

            {/* Date badge */}
            <div
              className="flex flex-col items-center px-5 py-3 rounded-lg border"
              style={{
                borderColor: "var(--border)",
                background: "var(--code-bg)",
              }}
            >
              <span className="text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>
                Event Date
              </span>
              <span
                className="text-lg font-semibold mt-1"
                style={{ color: "var(--accent)" }}
              >
                {formatDate(date)}
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          {/* Description */}
          <div className="text-left">
            <h2
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--text-h)" }}
            >
              About This Event
            </h2>
            <p className="leading-relaxed" style={{ color: "var(--text)" }}>
              {description}
            </p>
          </div>

          {/* Info grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-lg border"
            style={{
              borderColor: "var(--border)",
              background: "var(--code-bg)",
            }}
          >
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text)" }}>
                Event Date
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                {formatDate(date)}
              </p>
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text)" }}>
                Location
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                📍 {location}
              </p>
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text)" }}>
                Created
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                {formatDateTime(createdAt)}
              </p>
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text)" }}>
                Last Updated
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                {formatDateTime(updatedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
