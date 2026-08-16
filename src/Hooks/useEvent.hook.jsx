import { useState } from "react";
import { events } from "../data/event";

export const useEvent = () => {
  const [eventsData, setEventsData] = useState(events);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getEvents = () => {
    setLoading(true);
    setError(null);
    setEventsData(events);
    setLoading(false);
  };

  const getEventById = (id) =>
    eventsData.find((event) => String(event.id) === String(id)) ?? null;

  const createEvent = (eventData) => {
    const newEvent = {
      ...eventData,
      id: eventsData.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };
    setEventsData([...eventsData, newEvent]);

    return {
      success: true,
      message: "Event created successfully",
      event: newEvent,
    };
  };

  const updateEvent = (id, data) => {
    const eventToBeUpdated = getEventById(id);

    if (!eventToBeUpdated) {
      setError(`Event with ${id} not found`);
      return;
    }

    const updatedEvent = {
      ...eventToBeUpdated,
      ...data,
      updatedAt: new Date().toISOString(),
    };

    setEventsData(
      eventsData.map((event) =>
        String(event.id) === String(id) ? updatedEvent : event,
      ),
    );
  };

  const deleteEvent = (id) => {
    setEventsData(
      eventsData.filter((event) => String(event.id) !== String(id)),
    );
  };

  return {
    loading,
    error,
    eventsData,
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};
