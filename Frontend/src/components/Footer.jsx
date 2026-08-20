import { motion } from "motion/react";

function Footer({ darkMode }) {
  const companyLinks = [
    "Trainers Profile",
    "Terms & Conditions",
    "Privacy Policy",
    "Refund Policy",
    "Check-out",
    "Courses Pricing",
    "Careers",
  ];

  const locations = [
    {
      title: "Pune Baner",
      text: "Arbor Tech Park, Survey No.32/1A/1/19, Plot Number 18, Pancard Club Road, Westport Lane, Baner, Pune-411045.",
    },
    {
      title: "Pune Kharadi",
      text: "2nd Floor, Office Number 208, GLOBAL BUSINESS HUB, opp. Gera Commerzone IT Park Road, EON Free Zone, Kharadi, Pune, Maharashtra 411014.",
    },
    {
      title: "Nagpur",
      text: "4th Floor, 283, Vithal Rukmai Palace Rani, Laxminagar, Nagpur, Maharashtra 440022.",
    },
    {
      title: "Bhubaneswar",
      text: "New IT ZONE, N/37, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024.",
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-500 ${
        darkMode
          ? "border-white/10 bg-[#07110f] text-white"
          : "border-black/10 bg-[#f5faf8] text-[#07110f]"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full blur-[100px] ${
          darkMode ? "bg-[#32c7a5]/10" : "bg-[#159b7c]/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.1fr_0.6fr_1.8fr]">

          {/* ================= ABOUT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="mb-4">
              <h2
                className={`text-2xl font-black tracking-[0.08em] sm:text-3xl ${
                  darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
                }`}
              >
                ARBOR
              </h2>

              <p
                className={`text-[8px] font-semibold tracking-[0.4em] ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                ACADEMY
              </p>
            </div>

            <p
              className={`max-w-sm text-xs leading-6 sm:text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Arbor is an entrepreneur armed with a noble vision to make a
              difference in the career aspirations of students. With 20+
              years of experience in the education sector, Arbor is the
              founder and driving force behind its journey.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-2.5">
              {["f", "◎", "▶", "in", "◉"].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3, scale: 1.08 }}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition-all ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03] text-gray-400 hover:border-[#32c7a5]/50 hover:text-[#32c7a5]"
                      : "border-black/10 bg-white text-gray-500 hover:border-[#159b7c]/40 hover:text-[#159b7c]"
                  }`}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= COMPANY ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3
              className={`mb-4 text-sm font-bold uppercase tracking-wider ${
                darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
              }`}
            >
              Company
            </h3>

            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`text-xs transition-colors sm:text-sm ${
                      darkMode
                        ? "text-gray-400 hover:text-[#32c7a5]"
                        : "text-gray-600 hover:text-[#159b7c]"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ================= REACH US ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3
              className={`mb-4 text-sm font-bold uppercase tracking-wider ${
                darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
              }`}
            >
              Reach Us
            </h3>

            {/* Contact Row */}
            <div
              className={`mb-5 flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-black/10 bg-white"
              }`}
            >
              <a
                href="tel:+919028777287"
                className={`text-xs sm:text-sm ${
                  darkMode
                    ? "text-gray-300 hover:text-[#32c7a5]"
                    : "text-gray-600 hover:text-[#159b7c]"
                }`}
              >
                <span className="font-semibold">Phone:</span>{" "}
                +91 9028777287
              </a>

              <a
                href="mailto:info@arboracademy.in"
                className={`text-xs sm:text-sm ${
                  darkMode
                    ? "text-gray-300 hover:text-[#32c7a5]"
                    : "text-gray-600 hover:text-[#159b7c]"
                }`}
              >
                <span className="font-semibold">Email:</span>{" "}
                info@arboracademy.in
              </a>
            </div>

            {/* Locations */}
            <div className="grid gap-3 sm:grid-cols-2">
              {locations.map((location) => (
                <div
                  key={location.title}
                  className={`rounded-lg border p-3 transition-all duration-300 ${
                    darkMode
                      ? "border-white/10 bg-white/[0.02] hover:border-[#32c7a5]/30"
                      : "border-black/10 bg-white hover:border-[#159b7c]/30"
                  }`}
                >
                  <h4
                    className={`mb-1 text-xs font-semibold ${
                      darkMode
                        ? "text-[#32c7a5]"
                        : "text-[#159b7c]"
                    }`}
                  >
                    {location.title}
                  </h4>

                  <p
                    className={`text-[11px] leading-5 ${
                      darkMode
                        ? "text-gray-500"
                        : "text-gray-500"
                    }`}
                  >
                    {location.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-8 flex flex-col gap-2 border-t pt-5 text-center text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left ${
            darkMode ? "border-white/10" : "border-black/10"
          }`}
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} Arbor Academy. All rights reserved.
          </p>

          <p
            className={`font-medium ${
              darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
            }`}
          >
            Learn Today. Grow Tomorrow.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;