import { motion } from "motion/react";

// Company logos
import accenture from "../assets/company-logos/accenture.png";
import cognizant from "../assets/company-logos/cognizant.png";
import wipro from "../assets/company-logos/wipro.png";
import tcs from "../assets/company-logos/tcs.png";
import microsoft from "../assets/company-logos/microsoft.png";
import amazon from "../assets/company-logos/amazon.png";
import infosys from "../assets/company-logos/infosys.png";
import ibm from "../assets/company-logos/ibm.png";
import hp from "../assets/company-logos/hp.png";
import persistent from "../assets/company-logos/persistent.png";
import capgemini from "../assets/company-logos/capgemini.png";
import sap from "../assets/company-logos/sap.png";
import ey from "../assets/company-logos/ey.png";
import adobe from "../assets/company-logos/adobe.png";
import hexaware from "../assets/company-logos/hexaware.png";
import dxc from "../assets/company-logos/dxc.png";

const companies = [
  { name: "Accenture", logo: accenture },
  { name: "Cognizant", logo: cognizant },
  { name: "Wipro", logo: wipro },
  { name: "TCS", logo: tcs },
  { name: "Microsoft", logo: microsoft },
  { name: "Amazon", logo: amazon },
  { name: "Infosys", logo: infosys },
  { name: "IBM", logo: ibm },
  { name: "HP", logo: hp },
  { name: "Persistent", logo: persistent },
  { name: "Capgemini", logo: capgemini },
  { name: "SAP", logo: sap },
  { name: "EY", logo: ey },
  { name: "Adobe", logo: adobe },
  { name: "Hexaware", logo: hexaware },
  { name: "DXC Technology", logo: dxc },
];

function HiringCompanies({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden px-6 py-20 transition-colors duration-500 sm:px-8 lg:px-12 ${
        darkMode
          ? "bg-[#07110f] text-white"
          : "bg-[#f5faf8] text-[#07110f]"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] ${
          darkMode ? "bg-[#32c7a5]/10" : "bg-[#159b7c]/10"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <motion.p
            className={`mb-4 text-sm font-semibold uppercase tracking-[0.35em] ${
              darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Hiring Partners
          </motion.p>

          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Hiring{" "}
            <span
              className={
                darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
              }
            >
              Companies
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
            We connect you with leading companies in the industry.
            Our students have been placed at top organizations.
          </motion.p>
        </div>

        {/* Companies */}
        <div className="flex flex-wrap items-center justify-center gap-4">

          {companies.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
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
                margin: "-50px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              className={`group relative flex h-[75px] w-[145px] items-center justify-center overflow-hidden rounded-xl border p-4 transition-all duration-300 ${
                darkMode
                  ? `
                    border-white/20
                    bg-white
                    shadow-[0_0_20px_rgba(255,255,255,0.08)]
                    hover:border-[#32c7a5]/60
                    hover:shadow-[0_0_30px_rgba(50,199,165,0.18)]
                  `
                  : `
                    border-black/10
                    bg-white
                    hover:border-[#159b7c]/40
                    hover:shadow-xl
                  `
              }`}
            >
              {/* Soft White Glow - Dark Mode */}
              {darkMode && (
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-xl
                    bg-white/10
                    blur-xl
                  "
                />
              )}

              {/* Logo */}
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="
                  relative
                  z-10
                  max-h-[42px]
                  max-w-[115px]
                  object-contain
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              />

              {/* Bottom Accent */}
              <div
                className={`absolute bottom-0 left-1/2 z-20 h-[2px] w-0 -translate-x-1/2 transition-all duration-500 group-hover:w-full ${
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

export default HiringCompanies;