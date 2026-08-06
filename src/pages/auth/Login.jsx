import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuthStore from "../../store/auth.store";
import useSessionStore from "../../store/session.store";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  // const login = useAuthStore((s) => s.login);
  // const setSession = useSessionStore((s) => s.setSession);

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.password) {
      newErrors.password = "Password is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
      const result = login(form);
    // const result = login(form);
    if (result.success) {
      // setSession(result.user);
      toast.success(result.message);
      navigate("/events");
    } else {
      toast.error(result.message);
    }
  };

  const inputBase =
    "w-full border border-[var(--border)] bg-transparent rounded-lg px-4 py-2.5 text-sm text-[var(--text-h)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition";

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-[var(--text-h)]">
            Welcome back
          </h2>
          <p className="text-sm text-[var(--text)] mt-1">
            Log in to your account to continue.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-4 p-6 rounded-2xl shadow-xl bg-[var(--bg)] border border-[var(--border)]"
        >
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--text-h)] mb-1.5"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className={inputBase}
              placeholder="Enter a valid email"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="text-left">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--text-h)] mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className={`${inputBase} pr-10`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[var(--text-h)]"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <Button type="submit" className="w-full mt-2 py-2.5">
            Login
          </Button>
        </form>

        <p className="text-sm text-[var(--text)] mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-500 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
