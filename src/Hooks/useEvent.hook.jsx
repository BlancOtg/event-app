import React, { useEffect, useState } from "react";
import { events } from "../data/event";

export const useEvent = () => {
  // add the loading state and error state to the hook
  const [eventsData, setEventsData] = React.useState(events);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    setEventsData(events);
  };

  const getEventById = (id) => {

    const event = events.find((event) => event.id === parseInt(id));

      if (!event) {
        return null;
      }
      return event;
    }
  

  const createEvent = (eventData) => {};
  const updateEvent = (id, updatedData) => {};
  const deleteEvent = (id) => {};

  return {
    loading: false,
    error: null,
    eventsData,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};
