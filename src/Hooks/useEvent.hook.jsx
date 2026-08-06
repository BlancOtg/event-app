import React, { useEffect, useState } from "react";
import { events } from "../data/event";

export const useEvent = () => {
  // add the loading state and error state to the hook
  const [eventsData, setEventsData] = useState(events);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    setEventsData(events);
  };

  const getEventById = (id) => {
    const event = eventsData.find((event) => event.id === Number(id));
    if (!event) {
      return null;
    }
    return event;
  };

  const createEvent = (eventData) => {
    const newEvent = {
      id: eventsData.length + 1,
      name: eventData.name,
      description: eventData.description,
      date: eventData.date,
      status: eventData.status,
      category: eventData.category,
      location: eventData.location,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };
    console.log("New Event Created:", newEvent);
    setEventsData([...eventsData, newEvent]);

    return {
      success: true,
      message: "Event created successfully",
      event: newEvent,
    }
  };
  const updateEvent = (id, data) => {
    const eventToBeUpdated = eventsData.find((event) => event.id === id);

    if (!eventToBeUpdated) {
      setError(`Event with ${id} not found`);
      return;
    }
    const updatedEvent = {
      ...eventToBeUpdated,
      ...data,
      updatedAt: new Date().toISOString(),
    };
    const updatedEventList = eventsData.map((e) =>
      e.id === id ? updatedEvent : e,
    );
    setEventsData(updatedEventList);
  };
  const deleteEvent = (id) => {
    const updatedEvents = eventsData.filter((event) => event.id !== id);
    setEventsData(updatedEvents);
  };

  return {
    loading,
    error,
    eventsData,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
  };
};
