import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export const AuthProvider = ({ children }) => {
  return 
  <AuthContext.provider value={}>
    {children}
    </AuthContext.provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
