import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import useSessionStore from "../../store/session.store";

const LogOut = () => {
  const clearSession = useSessionStore((s) => s.clearSession);

  useEffect(() => {
    clearSession();
    toast.success("You have been logged out.", { toastId: "logout" });
  }, [clearSession]);

  return <Navigate to="/login" replace />;
};

export default LogOut;
