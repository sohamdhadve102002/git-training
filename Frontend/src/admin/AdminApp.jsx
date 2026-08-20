import { useEffect, useState } from "react";

import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import AdminWelcome from "./pages/AdminWelcome";
import AdminHome from "./pages/AdminHome";
import AdminAccessDenied from "./pages/AdminAccessDenied";

function AdminApp() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [admin, setAdmin] = useState(null);

  /*
  =========================================================
  VERIFY SERVER SESSION
  =========================================================
  */

  useEffect(() => {
    let mounted = true;

    const checkAuthentication = async () => {
      try {
        console.log("=================================");
        console.log("CHECKING SECURE AUTHENTICATION");
        console.log("=================================");

        const response = await fetch(
          "http://localhost:5000/api/auth/me",
          {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
            },
          }
        );

        console.log(
          "Auth response status:",
          response.status
        );

        let data = {};

        try {
          data = await response.json();
        } catch (error) {
          console.error(
            "Unable to read authentication response:",
            error
          );
        }

        console.log(
          "Auth response:",
          data
        );

        if (!mounted) {
          return;
        }

        /*
        =====================================================
        AUTHENTICATED
        =====================================================
        */

        if (
          response.ok &&
          data.success === true &&
          data.user
        ) {
          console.log(
            "Secure authentication verified."
          );

          console.log(
            "Logged in user:",
            data.user.username
          );

          console.log(
            "User role:",
            data.user.role
          );

          setAdmin(data.user);
          setAuthenticated(true);
          setLoading(false);

          return;
        }

        /*
        =====================================================
        AUTHENTICATION FAILED
        =====================================================
        */

        console.log(
          "Authentication failed."
        );

        setAuthenticated(false);
        setAdmin(null);
        setLoading(false);

        navigate(
          "/login",
          {
            replace: true,
          }
        );

      } catch (error) {
        console.error(
          "AUTHENTICATION CHECK ERROR:",
          error
        );

        if (!mounted) {
          return;
        }

        setAuthenticated(false);
        setAdmin(null);
        setLoading(false);

        navigate(
          "/login",
          {
            replace: true,
          }
        );
      }
    };

    checkAuthentication();

    return () => {
      mounted = false;
    };
  }, [navigate]);

  /*
  =========================================================
  LOADING SCREEN
  =========================================================
  */

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050b09] text-white">
        <div className="text-center">

          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-[#32c7a5]" />

          <h2 className="text-lg font-semibold">
            Securing your session
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Verifying your Arbor LMS account...
          </p>

        </div>
      </div>
    );
  }

  /*
  =========================================================
  NOT AUTHENTICATED
  =========================================================
  */

  if (
    !authenticated ||
    !admin
  ) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  /*
  =========================================================
  ROLE SECURITY
  =========================================================
  */

  const allowedAdminRoles = [
    "admin",
    "super_admin",
  ];

  if (
    !allowedAdminRoles.includes(
      admin.role
    )
  ) {
    return (
      <Routes>
        <Route
          path="*"
          element={
            <AdminAccessDenied />
          }
        />
      </Routes>
    );
  }

  /*
  =========================================================
  ADMIN APPLICATION
  =========================================================
  */

  return (
    <Routes>

      {/* =================================================
          ADMIN WELCOME
      ================================================= */}

      <Route
        index
        element={
          <AdminWelcome
            admin={admin}
          />
        }
      />

      {/* =================================================
          ADMIN DASHBOARD
      ================================================= */}

      <Route
        path="dashboard"
        element={
          <AdminHome
            admin={admin}
          />
        }
      />

      {/* =================================================
          ACCESS DENIED
      ================================================= */}

      <Route
        path="access-denied"
        element={
          <AdminAccessDenied />
        }
      />

      {/* =================================================
          INVALID ADMIN URL
      ================================================= */}

      <Route
        path="*"
        element={
          <Navigate
            to="/admin"
            replace
          />
        }
      />

    </Routes>
  );
}

export default AdminApp;