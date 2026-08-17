import { useContext, useMemo } from "react";
import { AuthContext } from "../context/AuthContext";
import useSessionStore from "../store/session.store";

export const AuthProvider = ({ children }) => {
  const session = useSessionStore((state) => state.session);
  const setSession = useSessionStore((state) => state.setSession);
  const clearSession = useSessionStore((state) => state.clearSession);

  const value = useMemo(
    () => ({
      session,
      isAuthenticated: Boolean(session),
      login: setSession,
      logout: clearSession,
    }),
    [session, setSession, clearSession],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
