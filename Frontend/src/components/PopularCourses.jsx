// PopularCourses.jsx

import { motion } from "motion/react";
import {
  BarChart3,
  CloudCog,
  BrainCircuit,
  Code2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    id: 1,
    icon: BarChart3,
    title: "Data Analytics",
    highlight: "with Gen AI",
    description: "Transforming raw data into meaningful insights.",
  },
  {
    id: 2,
    icon: CloudCog,
    title: "AWS DevOps",
    highlight: "",
    description: "Cloud infrastructure, automation & deployment.",
  },
  {
    id: 3,
    icon: BrainCircuit,
    title: "Data Science",
    highlight: "with Gen AI",
    description: "Build smart AI solutions using data science.",
  },
  {
    id: 4,
    icon: Code2,
    title: "Java Fullstack",
    highlight: "Development",
    description: "Build scalable applications using Java.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Cyber Security",
    highlight: "",
    description: "Protect systems and networks from attacks.",
  },
];

function PopularCourses() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-16
        text-[#07110f]
        transition-colors
        duration-500

        dark:bg-[#07110f]
        dark:text-white

        sm:px-8
        sm:py-20

        lg:px-10
        lg:py-24
      "
    >

      {/* BACKGROUND DECORATION */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[#32c7a5]/5
          blur-3xl

          dark:bg-[#32c7a5]/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-[#32c7a5]/5
          blur-3xl

          dark:bg-[#32c7a5]/10
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14"
        >

          {/* SMALL TITLE */}

          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#20bea0]

              sm:text-sm
            "
          >
            Explore Our Courses
          </p>

          {/* MAIN TITLE */}

          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-[#07110f]
              transition-colors
              duration-500

              dark:text-white

              sm:text-4xl
              md:text-5xl
            "
          >
            Our Popular Courses
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-gray-600
              transition-colors
              duration-500

              dark:text-gray-400

              sm:text-base
              sm:leading-7
            "
          >
            Learn industry-relevant skills with practical training,
            expert guidance and career-focused learning.
          </p>

        </motion.div>


        {/* COURSE GRID */}

        <div
          className="
            grid
            grid-cols-1
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-5
          "
        >

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.div
                key={course.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className="group"
              >

                {/* CARD */}

                <div
                  className="
                    relative
                    flex
                    h-full
                    min-h-[320px]
                    flex-col
                    overflow-hidden
                    rounded-2xl

                    border
                    border-gray-200

                    bg-white

                    p-6

                    shadow-sm

                    transition-all
                    duration-500

                    group-hover:border-[#32c7a5]/40
                    group-hover:shadow-xl

                    dark:border-white/10
                    dark:bg-[#0d1b18]
                    dark:shadow-black/20

                    dark:group-hover:border-[#32c7a5]/50
                    dark:group-hover:bg-[#10231f]
                    dark:group-hover:shadow-black/40
                  "
                >

                  {/* TOP ACCENT */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-1
                      w-0
                      bg-[#32c7a5]
                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />


                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      mb-6
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl

                      bg-[#e9faf6]
                      text-[#20bea0]

                      transition-colors
                      duration-300

                      group-hover:bg-[#20bea0]
                      group-hover:text-white

                      dark:bg-[#12352e]
                      dark:text-[#32c7a5]

                      dark:group-hover:bg-[#20bea0]
                      dark:group-hover:text-white
                    "
                  >
                    <Icon
                      size={32}
                      strokeWidth={1.8}
                    />
                  </motion.div>


                  {/* COURSE TITLE */}

                  <h3
                    className="
                      text-xl
                      font-bold
                      leading-tight

                      text-[#07110f]

                      transition-colors
                      duration-300

                      dark:text-white
                    "
                  >
                    {course.title}

                    {course.highlight && (
                      <>
                        <br />

                        <span className="text-[#20bea0]">
                          {course.highlight}
                        </span>
                      </>
                    )}
                  </h3>


                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-4
                      flex-grow
                      text-sm
                      leading-6

                      text-gray-600

                      transition-colors
                      duration-300

                      dark:text-gray-400
                    "
                  >
                    {course.description}
                  </p>


                  {/* LEARN MORE */}

                  <button
                    className="
                      mt-6
                      inline-flex
                      w-fit
                      items-center
                      gap-2

                      text-sm
                      font-semibold

                      text-[#07110f]

                      transition-all
                      duration-300

                      group-hover:gap-3
                      group-hover:text-[#20bea0]

                      dark:text-gray-200
                      dark:group-hover:text-[#32c7a5]
                    "
                  >
                    Learn More

                    <ArrowRight
                      size={17}
                      strokeWidth={2}
                    />
                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* VIEW ALL COURSES */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-10 text-center sm:mt-12"
        >

          <button
            className="
              inline-flex
              items-center
              gap-2

              rounded-lg

              bg-[#07110f]
              px-6
              py-3

              text-sm
              font-semibold
              text-[#32c7a5]

              shadow-lg

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#10231f]
              hover:shadow-xl

              dark:bg-[#32c7a5]
              dark:text-[#07110f]

              dark:hover:bg-[#45d8b6]

              sm:px-7
              sm:py-3.5
              sm:text-base
            "
          >
            View All Courses

            <ArrowRight size={18} />

          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default PopularCourses;