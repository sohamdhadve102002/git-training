import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function AdminWelcome() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let mounted = true;

    const verifyUser = async () => {
      try {
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

        const data = await response.json();

        console.log("ME RESPONSE:", data);

        if (!response.ok || !data.success || !data.user) {
          navigate("/login", {
            replace: true,
          });

          return;
        }

        if (mounted) {
          setUser(data.user);
          setChecking(false);
        }
      } catch (error) {
        console.error(
          "Authentication verification failed:",
          error
        );

        navigate("/login", {
          replace: true,
        });
      }
    };

    verifyUser();

    return () => {
      mounted = false;
    };
  }, [navigate]);

  useEffect(() => {
    if (!user) {
      return;
    }

    const timer = setTimeout(() => {
      navigate("/admin/dashboard", {
        replace: true,
      });
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [user, navigate]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07110f] text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#32c7a5]" />

          <p className="mt-5 text-sm text-gray-400">
            Verifying your secure session...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const firstName =
    user.firstName ||
    user.first_name ||
    user.username ||
    "User";

  const role = user.role || "admin";

  const roleName =
    role === "super_admin"
      ? "Super Admin"
      : role.charAt(0).toUpperCase() +
        role.slice(1);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050b09] px-6 text-white">

      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#32c7a5]/10 blur-[160px]" />

        <div className="absolute left-[5%] top-[15%] h-52 w-52 rounded-full bg-[#159b7c]/10 blur-[100px]" />

        <div className="absolute bottom-[5%] right-[5%] h-64 w-64 rounded-full bg-[#32c7a5]/10 blur-[120px]" />

      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 w-full max-w-4xl text-center">

        {/* BRAND */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <p className="text-xs font-semibold tracking-[0.5em] text-[#32c7a5] sm:text-sm">
            ARBOR ACADEMY
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            ADMIN PANEL
          </h1>

        </motion.div>

        {/* =================================================
            USER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="mt-12"
        >

          <p className="text-lg text-gray-400">
            Hello
          </p>

          <h2 className="mt-2 text-5xl font-black sm:text-7xl">

            {firstName}

            <span className="text-[#32c7a5]">
              .
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-xl">

            Welcome to

            <span className="font-semibold text-white">
              {" "}Arbor Academy
            </span>

            {" "}

            <span className="font-semibold text-[#32c7a5]">
              {roleName}
            </span>

            {" "}Portal.

          </p>

        </motion.div>

        {/* =================================================
            PROFILE / ROLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.5,
            duration: 0.7,
          }}
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl"
        >

          {user.profileImage ? (
            <img
              src={user.profileImage}
              alt={firstName}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-[#32c7a5]/30"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#32c7a5]/10 font-bold text-[#32c7a5]">
              {firstName.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="text-left">

            <p className="text-sm font-semibold text-white">
              {firstName}
            </p>

            <p className="text-xs text-gray-500">
              {roleName} Access Verified
            </p>

          </div>

          <span className="ml-2 h-2.5 w-2.5 animate-pulse rounded-full bg-[#32c7a5]" />

        </motion.div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 0.6,
          }}
          className="mx-auto mt-12 max-w-md"
        >

          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 6,
                ease: "linear",
              }}
              className="h-full rounded-full bg-[#32c7a5]"
            />

          </div>

          <p className="mt-4 text-xs tracking-wider text-gray-500">
            Preparing your secure workspace...
          </p>

        </motion.div>

      </div>

    </div>
  );
}

export default AdminWelcome;