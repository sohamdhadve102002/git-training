// HeroSlider.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import background1 from "../assets/Slider-Background/Background-1.png";
import background2 from "../assets/Slider-Background/Background-2.png";
import background3 from "../assets/Slider-Background/Background-3.png";

const slides = [
  {
    id: 1,
    image: background3,
    eyebrow: "WELCOME TO ARBOR ACADEMY",
    title: "Build Your Career in IT sector",
    description:
      "Get trained by industry experts and build the skills required for your dream career.",
    badge: "Pay After Placement",
    button: "Enroll Now",
    secondaryButton: "Download Brochure",
  },
  {
    id: 2,
    image: background2,
    eyebrow: "LEARN FROM INDUSTRY EXPERTS",
    title: "Learn. Practice. Get Job Ready.",
    description:
      "Master real-world technologies through practical projects and expert guidance.",
    badge: "Industry Focused Training",
    button: "Explore Courses",
    secondaryButton: "View Courses",
  },
  {
    id: 3,
    image: background1,
    eyebrow: "YOUR FUTURE STARTS HERE",
    title: "Learn Skills That Matter",
    description:
      "Build your confidence with hands-on learning, assessments and placement preparation.",
    badge: "100% Placement Support",
    button: "Start Learning",
    secondaryButton: "Know More",
  },
];

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[480px] w-full overflow-hidden bg-[#07110f] sm:min-h-[500px] lg:min-h-[520px]">

      {/* BACKGROUND SLIDE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: 1,
            },
            scale: {
              duration: 7,
              ease: "linear",
            },
          }}
        >
          <img
            src={slide.image}
            alt=""
            className="h-full w-full object-cover object-center"
          />

          {/* LEFT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/15 to-transparent" />

          {/* MOBILE OVERLAY */}
          <div className="absolute inset-0 bg-white/65 lg:hidden" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl items-center px-5 py-10 sm:min-h-[500px] sm:px-8 sm:py-12 lg:min-h-[520px] lg:px-10 lg:py-14">

        <div className="w-full max-w-xl">

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{
                opacity: 0,
                x: -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >

              {/* EYEBROW */}
              <motion.p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#20c7a0] sm:mb-4 sm:text-xs sm:tracking-[0.25em]"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.6,
                }}
              >
                {slide.eyebrow}
              </motion.p>

              {/* TITLE */}
              <motion.h1
                className="max-w-xl text-3xl font-bold leading-[1.1] text-[#07110f] sm:text-4xl md:text-5xl lg:text-6xl"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
              >
                {slide.title}
              </motion.h1>

              {/* BADGE */}
              <motion.div
                className="mt-4 inline-flex items-center rounded-full bg-[#20bea0] px-4 py-2.5 text-xs font-semibold text-white shadow-lg sm:mt-5 sm:px-5 sm:py-2.5 sm:text-sm"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                }}
              >
                {slide.badge}
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                className="mt-4 max-w-lg text-sm leading-6 text-gray-700 sm:mt-5 sm:text-base sm:leading-7"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                }}
              >
                {slide.description}
              </motion.p>

              {/* DIVIDER */}
              <motion.div
                className="mt-4 h-px w-full max-w-lg bg-gray-300 sm:mt-5"
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: "100%",
                  opacity: 1,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.7,
                }}
              />

              {/* BUTTONS */}
              <motion.div
                className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.05,
                  duration: 0.7,
                }}
              >
                {/* PRIMARY BUTTON */}
                <button
                  className="
                    rounded-lg
                    bg-black
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-[#20d6aa]
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#07110f]

                    sm:px-6
                    sm:py-3.5
                  "
                >
                  {slide.button}
                </button>

                {/* SECONDARY BUTTON */}
                <button
                  className="
                    rounded-lg
                    border
                    border-gray-300
                    bg-white/80
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-gray-900
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white

                    sm:px-6
                    sm:py-3.5
                  "
                >
                  {slide.secondaryButton}
                </button>
              </motion.div>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {slides.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-[#20c7a0] sm:w-10"
                : "w-4 bg-gray-400/60 sm:w-5"
            }`}
          />
        ))}
      </div>

      {/* SLIDE NUMBER */}
      <div className="absolute bottom-5 right-5 z-20 hidden text-xs font-medium text-gray-600 sm:bottom-6 sm:right-8 sm:block">
        <span className="text-[#20c7a0]">
          0{currentSlide + 1}
        </span>

        <span className="mx-2">/</span>

        <span>03</span>
      </div>

    </section>
  );
}

export default HeroSlider;