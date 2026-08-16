import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { events as seedEvents } from "../data/event";

const createId = () =>
  globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;

export const useEventStore = create()(
  persist(
    (set, get) => ({
      events: seedEvents,
      eventById: (id) => {
        const event = get().events.find(
          (event) => String(event.id) === String(id),
        );
        return event || null;
      },
      addEvent: (event) =>
        set((state) => ({
          events: [
            ...state.events,
            {
              ...event,
              id: createId(),
              createdAt: new Date().toISOString(),
              updatedAt: null,
            },
          ],
        })),
      updateEvent: (id, data) =>
        set((state) => ({
          events: state.events.map((event) =>
            String(event.id) === String(id)
              ? { ...event, ...data, updatedAt: new Date().toISOString() }
              : event,
          ),
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter(
            (event) => String(event.id) !== String(id),
          ),
        })),
    }),
    {
      name: "event-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
