import { motion } from "motion/react";
import { useEffect } from "react";

function Welcome({ onComplete }) {
  const text = "ARBOR ACADEMY";

  useEffect(() => {
    // Welcome screen duration
    const timer = setTimeout(() => {
      onComplete();
    }, 5200);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#07110f] px-4 text-white"
      exit={{
        opacity: 0,
        scale: 1.03,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#32c7a5]/10 blur-[80px] sm:h-[350px] sm:w-[350px] sm:blur-[100px] md:h-[500px] md:w-[500px] md:blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center text-center">

        {/* WELCOME TO */}
        <motion.p
          className="mb-5 text-lg font-medium uppercase tracking-[0.3em] text-[#32c7a5] sm:mb-6 sm:text-2xl sm:tracking-[0.45em] md:text-3xl md:tracking-[0.5em]"
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          Welcome To
        </motion.p>

        {/* ARBOR ACADEMY */}
        <div className="flex max-w-full flex-wrap justify-center px-2">
          {text.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              className="text-3xl font-bold tracking-[0.08em] text-white sm:text-5xl sm:tracking-[0.12em] md:text-6xl md:tracking-[0.15em] lg:text-7xl"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.8,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.5,
                delay: 1.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Animated Line */}
        <motion.div
          className="mx-auto mt-7 h-[2px] bg-[#32c7a5] sm:mt-8"
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: "min(180px, 45vw)",
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 3,
            ease: "easeOut",
          }}
        />

        {/* TAGLINE */}
        <motion.p
          className="mt-5 px-2 text-[10px] font-medium tracking-[0.2em] text-gray-400 sm:text-xs sm:tracking-[0.3em] md:text-sm md:tracking-[0.35em]"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 3.5,
            ease: "easeOut",
          }}
        >
          LEARN • GROW • ACHIEVE
        </motion.p>

      </div>
    </motion.div>
  );
}

export default Welcome;