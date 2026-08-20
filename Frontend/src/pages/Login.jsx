import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ darkMode = true }) {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!loginId.trim() || !password) {
      setError("Login ID and password are required.");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending login request...");

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            loginId: loginId.trim(),
            password: password,
          }),
        }
      );

      console.log("HTTP Status:", response.status);

      const data = await response.json();

      console.log("LOGIN RESPONSE:", data);

      /*
      =====================================================
      LOGIN FAILED
      =====================================================
      */

      if (!response.ok || !data.success) {
        setError(
          data.message ||
            "Invalid Login ID or password."
        );

        setLoading(false);
        return;
      }

      /*
      =====================================================
      ROLE CHECK
      =====================================================
      */

      if (!data.role) {
        setError(
          "User role was not returned by the server."
        );

        setLoading(false);
        return;
      }

      /*
      =====================================================
      USER CHECK
      =====================================================
      */

      if (!data.user) {
        setError(
          "User information was not returned by the server."
        );

        setLoading(false);
        return;
      }

      /*
      =====================================================
      SAVE USER
      =====================================================
      */

      sessionStorage.setItem(
        "arborUser",
        JSON.stringify(data.user)
      );

      sessionStorage.setItem(
        "arborRole",
        data.role
      );

      console.log(
        "Authenticated User:",
        data.user
      );

      console.log(
        "Authenticated Role:",
        data.role
      );

      /*
      =====================================================
      SUCCESS MESSAGE
      =====================================================
      */

      const firstName =
        data.user.firstName ||
        data.user.first_name ||
        data.user.username ||
        "User";

      setSuccess(
        `Login successful! Welcome ${firstName}.`
      );

      /*
      =====================================================
      ROLE BASED REDIRECT
      =====================================================
      */

      setTimeout(() => {
        if (
          data.role === "admin" ||
          data.role === "super_admin"
        ) {
          navigate("/admin", {
            replace: true,
          });

          return;
        }

        if (data.role === "hr") {
          navigate("/hr", {
            replace: true,
          });

          return;
        }

        if (data.role === "sales") {
          navigate("/sales", {
            replace: true,
          });

          return;
        }

        if (data.role === "student") {
          navigate("/student", {
            replace: true,
          });

          return;
        }

        if (data.role === "teacher") {
          navigate("/teacher", {
            replace: true,
          });

          return;
        }

        setError(
          "Invalid user role received from server."
        );

        setLoading(false);
      }, 1500);

    } catch (error) {
      console.error("LOGIN ERROR:", error);

      setError(
        "Unable to connect to the server. Please make sure the backend is running."
      );

      setLoading(false);
    }
  };

  /*
  =========================================================
  BACK TO HOME
  =========================================================
  */

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 py-10 ${
        darkMode
          ? "bg-[#050b09] text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >

      {/* Background */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] ${
            darkMode
              ? "bg-[#32c7a5]/10"
              : "bg-[#159b7c]/10"
          }`}
        />
      </div>

      {/* Login Card */}

      <div
        className={`relative z-10 w-full max-w-md rounded-3xl border p-6 shadow-2xl sm:p-8 ${
          darkMode
            ? "border-white/10 bg-[#0b1714]/95"
            : "border-gray-200 bg-white"
        }`}
      >

        {/* Logo */}

        <div className="mb-8 text-center">

          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black ${
              darkMode
                ? "bg-[#32c7a5]/10 text-[#32c7a5]"
                : "bg-[#159b7c]/10 text-[#159b7c]"
            }`}
          >
            A
          </div>

          <p
            className={`mt-5 text-xs font-bold tracking-[0.4em] ${
              darkMode
                ? "text-[#32c7a5]"
                : "text-[#159b7c]"
            }`}
          >
            ARBOR ACADEMY
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            Welcome Back
          </h1>

          <p
            className={`mt-2 text-sm ${
              darkMode
                ? "text-gray-500"
                : "text-gray-500"
            }`}
          >
            Login to your LMS portal
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleLogin}>

          {/* Login ID */}

          <div className="mb-5">

            <label
              className={`mb-2 block text-sm font-semibold ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Login ID
            </label>

            <input
              type="text"
              value={loginId}
              onChange={(e) => {
                setLoginId(e.target.value);
                setError("");
                setSuccess("");
              }}
              placeholder="Enter Admin ID or Username"
              autoComplete="username"
              disabled={loading}
              className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                darkMode
                  ? "border-white/10 bg-[#07110f] text-white placeholder:text-gray-600 focus:border-[#32c7a5]"
                  : "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-[#159b7c]"
              }`}
            />

          </div>

          {/* Password */}

          <div className="mb-5">

            <label
              className={`mb-2 block text-sm font-semibold ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Password
            </label>

            <div className="relative">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                  setSuccess("");
                }}
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={loading}
                className={`w-full rounded-xl border px-4 py-3.5 pr-16 text-sm outline-none transition ${
                  darkMode
                    ? "border-white/10 bg-[#07110f] text-white placeholder:text-gray-600 focus:border-[#32c7a5]"
                    : "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 focus:border-[#159b7c]"
                }`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className={`absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold ${
                  darkMode
                    ? "text-[#32c7a5]"
                    : "text-[#159b7c]"
                }`}
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

          </div>

          {/* Error */}

          {error && (
            <div
              className={`mb-5 rounded-xl border px-4 py-3 text-sm ${
                darkMode
                  ? "border-red-500/20 bg-red-500/10 text-red-400"
                  : "border-red-200 bg-red-50 text-red-600"
              }`}
            >
              {error}
            </div>
          )}

          {/* Success */}

          {success && (
            <div
              className={`mb-5 rounded-xl border px-4 py-3 text-sm ${
                darkMode
                  ? "border-[#32c7a5]/20 bg-[#32c7a5]/10 text-[#32c7a5]"
                  : "border-[#159b7c]/20 bg-[#159b7c]/10 text-[#159b7c]"
              }`}
            >
              ✓ {success}
              <div className="mt-1 text-xs opacity-70">
                Redirecting to your dashboard...
              </div>
            </div>
          )}

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-xl py-3.5 text-sm font-bold transition-all ${
              loading
                ? "cursor-not-allowed opacity-60"
                : "hover:-translate-y-0.5"
            } ${
              darkMode
                ? "bg-[#32c7a5] text-[#07110f] hover:bg-[#43d8b5]"
                : "bg-[#159b7c] text-white hover:bg-[#12876d]"
            }`}
          >
            {loading
              ? "Signing you in..."
              : "Login to Arbor LMS"}
          </button>

        </form>

        {/* Back To Home */}

        <button
          type="button"
          onClick={handleBackToHome}
          disabled={loading}
          className={`mt-6 flex w-full items-center justify-center gap-2 text-sm font-medium transition ${
            darkMode
              ? "text-gray-500 hover:text-[#32c7a5]"
              : "text-gray-500 hover:text-[#159b7c]"
          }`}
        >
          <span>←</span>
          <span>Back to Home</span>
        </button>

        {/* Security */}

        <div
          className={`mt-6 text-center text-[11px] ${
            darkMode
              ? "text-gray-600"
              : "text-gray-400"
          }`}
        >
          Secure authentication • Arbor Academy LMS
        </div>

      </div>
    </div>
  );
}

export default Login;