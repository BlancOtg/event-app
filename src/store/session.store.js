import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const useSessionStore = create()(
  persist(
    (set, get) => ({
      session: null,
      isAuthenticated: () => !!get().session,

      setSession: (user) => set({ session: user }),

      clearSession: () => set({ session: null, user: null }),
    }),
    {
      name: "session-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useSessionStore;
