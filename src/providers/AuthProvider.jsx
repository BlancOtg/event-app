import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import useSessionStore from "../store/session.store";

export const AuthProvider = ({ children }) => {
  const session = useSessionStore((state) => state.session);
  const isAuthenticated = useSessionStore((state) => state.isAuthenticated);
  const logout = useSessionStore((state) => state.clearSession);
  return (
    <AuthContext.Provider value={{ session, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
