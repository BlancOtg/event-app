import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useSessionStore = create()(
  persist(
    (set) => ({
      session: null,

      setSession: (user) => set({ session: user }),

      clearSession: () => set({ session: null }),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSessionStore;
