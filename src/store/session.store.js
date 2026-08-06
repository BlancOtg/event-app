import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSessionStore = create()(
  persist(
    (set) => ({
      user: null,
      session: null,

      setSession: (user) => set({ session: user, user }),

      clearSession: () => set({ session: null, user: null }),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSessionStore;
