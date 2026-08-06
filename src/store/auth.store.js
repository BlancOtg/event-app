import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create()(
  persist(
    (set, get) => ({
      users: [],

      register: (data) => {
        const { users } = get();
        const emailExists = users.some(
          (user) => user.email.toLowerCase() === data.email.toLowerCase(),
        );

        if (emailExists) {
          return {
            success: false,
            message: "An account with this email already exists.",
          };
        }

        const newUser = {
          ...data,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: null,
        };

        set({ users: [...users, newUser] });

        return {
          success: true,
          message: "Account created successfully! Please log in.",
          user: newUser,
        };
      },

      login: (data) => {
        const { users } = get();
        const user = users.find(
          (u) => u.email.toLowerCase() === data.email.toLowerCase(),
        );

        if (!user) {
          return {
            success: false,
            message: "No account found with this email.",
          };
        }

        if (user.password !== data.password) {
          return {
            success: false,
            message: "Incorrect password. Please try again.",
          };
        }

        return {
          success: true,
          message: "Welcome back!",
          data: user,
        };
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
