import { motion } from "motion/react";

const benefits = [
  {
    number: "01",
    title: "Live Industry Projects",
    description:
      "Work on practical projects inspired by real industry requirements and build job-ready experience.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Dedicated Placement Team",
    description:
      "Get dedicated career support, job opportunities, and guidance throughout your placement journey.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Mock Interviews",
    description:
      "Practice with realistic technical and HR mock interviews to build confidence before the real interview.",
    icon: "◎",
  },
  {
    number: "04",
    title: "Free Demo Sessions",
    description:
      "Experience our learning approach and interact with trainers before choosing the right program.",
    icon: "▶",
  },
  {
    number: "05",
    title: "ATS-Optimized Resume",
    description:
      "Create a professional, ATS-friendly resume designed to highlight your skills and experience.",
    icon: "▤",
  },
  {
    number: "06",
    title: "100% Job Assistance",
    description:
      "Receive continuous career assistance, interview preparation, and job search support.",
    icon: "✓",
  },
  {
    number: "07",
    title: "Pay After Placement",
    description:
      "Focus on learning and career growth with flexible placement-oriented payment options.",
    icon: "₹",
  },
  {
    number: "08",
    title: "LinkedIn Profile Optimization",
    description:
      "Improve your LinkedIn presence and showcase your skills to recruiters and industry professionals.",
    icon: "in",
  },
];

function WhyChooseUs({ darkMode = true }) {
  return (
    <section
      className={`relative overflow-hidden px-6 py-24 transition-colors duration-500 sm:px-8 lg:px-12 ${
        darkMode
          ? "bg-[#07110f] text-white"
          : "bg-[#f5faf8] text-[#07110f]"
      }`}
    >
      {/* Background glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] ${
          darkMode ? "bg-[#32c7a5]/10" : "bg-[#159b7c]/10"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <motion.p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.35em] ${
              darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Learn Today.{" "}
            <span
              className={
                darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
              }
            >
              Grow Tomorrow.
            </span>
          </motion.h2>

          <motion.p
            className={`mt-5 text-base leading-7 sm:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Everything you need to build practical skills, prepare for
            interviews, and take the next step in your career.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative min-h-[250px] overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:border-[#32c7a5]/40 hover:bg-[#32c7a5]/[0.05]"
                  : "border-black/10 bg-white hover:border-[#159b7c]/40 hover:shadow-xl"
              }`}
            >

              {/* Number */}
              <div className="flex items-start justify-between">

                <span
                  className={`text-xs font-bold tracking-widest ${
                    darkMode
                      ? "text-[#32c7a5]/60"
                      : "text-[#159b7c]/60"
                  }`}
                >
                  {benefit.number}
                </span>

                {/* Icon */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300 group-hover:scale-110 ${
                    darkMode
                      ? "bg-[#32c7a5]/10 text-[#32c7a5]"
                      : "bg-[#159b7c]/10 text-[#159b7c]"
                  }`}
                >
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">

                <h3 className="text-lg font-bold">
                  {benefit.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {benefit.description}
                </p>

              </div>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${
                  darkMode
                    ? "bg-[#32c7a5]"
                    : "bg-[#159b7c]"
                }`}
              />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;