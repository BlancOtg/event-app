import React from "react";
import Button from "../../components/Button";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { MoveLeft, Calendars } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import useAuthStore from "../../store/auth.store";

const AuthLayout = () => {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);

  return (
    <AuthContext.provider value={user}>
      <div className="min-h-screen flex flex-col bg-(--bg)">
        <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-(--border)">
          <Link
            to="/"
            className="flex gap-2 items-center text-(--text-h) font-semibold"
          >
            <Calendars className="text-purple-500" />
            Event App
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-sm text-(--text) hover:text-(--text-h) transition font-medium"
          >
            <MoveLeft size={16} />
            Back
          </button>
        </header>

        <main className="max-w-5xl mx-auto w-full px-4 py-8 flex-1">
          <Outlet />
        </main>

        <footer className="py-6 text-center text-xs text-(--text) border-t border-(--border)">
          © {new Date().getFullYear()} Event App. All rights reserved.
        </footer>
      </div>
    </AuthContext.provider>
  );
};

export default AuthLayout;
