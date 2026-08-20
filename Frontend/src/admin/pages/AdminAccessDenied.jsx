import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

function AdminAccessDenied() {

  const navigate =
    useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#07110f] px-5 text-white">

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="w-full max-w-lg text-center"
      >

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10">

          <span className="text-3xl">
            🔒
          </span>

        </div>


        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
          Access Denied
        </p>


        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Admin Area
        </h1>


        <p className="mx-auto mt-5 max-w-md text-gray-400">
          You don't have permission to
          access this page. Please sign in
          using an authorized administrator
          account.
        </p>


        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <button
            onClick={() =>
              navigate("/login")
            }
            className="rounded-xl bg-[#32c7a5] px-6 py-3 text-sm font-semibold text-[#07110f] transition hover:scale-[1.02]"
          >
            Go to Login
          </button>

          <button
            onClick={() =>
              navigate("/")
            }
            className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/5"
          >
            Go Home
          </button>

        </div>

      </motion.div>

    </div>
  );
}

export default AdminAccessDenied;