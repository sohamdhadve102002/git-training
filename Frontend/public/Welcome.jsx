import { motion } from "motion/react";

function Welcome({ onComplete }) {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[#07110f] px-5 text-white">

      <motion.div
        className="text-center"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#32c7a5]">
          ARBOR ACADEMY
        </p>

        <h1 className="mt-5 text-4xl font-bold sm:text-6xl">
          Hey 👋
        </h1>

        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Welcome to{" "}
          <span className="text-[#32c7a5]">
            Arbor Academy
          </span>
        </h2>

        <p className="mt-5 text-gray-400">
          Learn Today. Grow Tomorrow.
        </p>

        <motion.div
          className="mx-auto mt-10 h-[2px] w-48 overflow-hidden bg-white/10"
        >
          <motion.div
            className="h-full bg-[#32c7a5]"
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 2,
            }}
            onAnimationComplete={onComplete}
          />
        </motion.div>

      </motion.div>

    </div>
  );
}

export default Welcome;