import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/me",
          {
            method: "GET",
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          setAuthenticated(false);
          return;
        }

        setAuthenticated(true);
        setRole(data.role);

        if (data.user) {
          sessionStorage.setItem(
            "arborUser",
            JSON.stringify(data.user)
          );
        }

        if (data.role) {
          sessionStorage.setItem(
            "arborRole",
            data.role
          );
        }

      } catch (error) {
        console.error(
          "Authentication check failed:",
          error
        );

        setAuthenticated(false);
      } finally {
        setChecking(false);
      }
    };

    checkAuthentication();
  }, []);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050b09] text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#32c7a5]" />

          <p className="mt-4 text-sm text-gray-400">
            Verifying your session...
          </p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    sessionStorage.removeItem("arborUser");
    sessionStorage.removeItem("arborRole");

    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}

export default ProtectedAdminRoute;