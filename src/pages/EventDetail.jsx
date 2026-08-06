import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useEventStore } from "../store/events.store";

const EventDetail = () => {
  const { id } = useParams();
  // const [event, setEvent] = useState(null);
  const navigate = useNavigate();
const event = useEventStore((state) => state.eventById(id));
const loading = useEventStore((state) => state.loading);
const error = useEventStore((state) => state.error);
const updateEvent = useEventStore((state) => state.updateEvent);
const deleteEvent = useEventStore((state) => state.deleteEvent);



  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-white text-lg">Loading Event Details...</p>
      </div>
    );
  }
  if (error || !event) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        {error}
        <div className="text-6xl">🔍</div>
        <h2
          className="text-2xl font-semibold"
          style={{ color: "var(--text-h)" }}
        >
          Event Not Found
        </h2>
        <p className="text-gray-400">
          The event you're looking for doesn't exist.
        </p>
        <Button
          onClick={() => navigate("/events")}
          className="px-6 py-2 rounded-full text-white font-medium cursor-pointer"
          style={{ background: "var(--accent)" }}
        >
          ← Back to Events
        </Button>
      </div>
    );
  }



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

  const { name, date, location, description, category, status, createdAt, updatedAt } = event;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button */}
      <Button
        onClick={() => navigate("/events")}
        className="flex items-center text-(--accent) gap-2 mb-6 text-sm font-medium cursor-pointer transition-opacity hover:opacity-70 bg-no"
      >
        <span>←</span>
        <span>Back to Events</span>
      </Button>

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
              <span
                className="text-xs uppercase tracking-wider"
                style={{ color: "var(--text)" }}
              >
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
              <p
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: "var(--text)" }}
              >
                Event Date
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                {formatDate(date)}
              </p>
            </div>
            <div className="text-left">
              <p
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: "var(--text)" }}
              >
                {location}
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                📍 {location}
              </p>
            </div>
            <div className="text-left">
              <p
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: "var(--text)" }}
              >
                {createdAt}
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                {formatDateTime(createdAt)}
              </p>
            </div>
            <div className="text-left">
              <p
                className="text-xs uppercase tracking-wider mb-1"
                style={{ color: "var(--text)" }}
              >
                Last Updated
              </p>
              <p className="font-medium" style={{ color: "var(--text-h)" }}>
                {formatDateTime(updatedAt)}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-between items-center gap-4 pt-2">
            <Button
              onClick={() => {updateEvent(id); navigate("/events/new");}}
              className="px-6 py-2 rounded-full bg-(--accent-bg) border-(--accent) border-2  text-white font-medium cursor-pointer"
              style={{ background: "var(--accent)" }}
            >
              ✏️ Update Event
            </Button>
            <Button
              onClick={() => {deleteEvent(id); navigate("/events");}}
              className="px-6 py-2 rounded-full bg-[#ef4444] text-white font-medium cursor-pointer"
            >
              🗑️ Delete Event
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
