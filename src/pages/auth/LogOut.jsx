import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../providers/AuthProvider";

const LogOut = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    toast.success("You have been logged out.", { toastId: "logout" });
  }, [logout]);

  return <Navigate to="/login" replace />;
};

export default LogOut;
