import { motion } from "motion/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function ContactUs({ darkMode, setDarkMode }) {
  const locations = [
    {
      title: "Pune - Baner",
      address:
        "Arbor Tech Park, Survey No.32/1A/1/19, Plot Number 18, Pancard Club Road, Westport Lane, Baner, Pune - 411045.",
    },
    {
      title: "Pune - Kharadi",
      address:
        "2nd Floor, Office Number 208, GLOBAL BUSINESS HUB, Opp. Gera Commerzone IT Park Road, EON Free Zone, Kharadi, Pune, Maharashtra 411014.",
    },
    {
      title: "Nagpur / The Workstation",
      address:
        "4th Floor, 283, Vithal Rukmai Palace Rani, Laxminagar, Nagpur, Maharashtra 440022.",
    },
    {
      title: "Bhubaneswar / Odisha",
      address:
        "New IT ZONE, N/37, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024.",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content of Contact Us Page */}
      <main
        className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${darkMode
          ? "bg-[#07110f] text-white"
          : "bg-[#f5faf8] text-[#07110f]"
          }`}
      >
        {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

        <div
          className={`pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full blur-[130px] ${darkMode ? "bg-[#32c7a5]/10" : "bg-[#159b7c]/10"
            }`}
        />

        <div
          className={`pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full blur-[130px] ${darkMode ? "bg-[#32c7a5]/10" : "bg-[#159b7c]/10"
            }`}
        />

        {/* =========================================================
          PAGE CONTAINER
      ========================================================= */}

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          {/* =======================================================
            PAGE HEADING
        ======================================================= */}

          <motion.div
            className="mx-auto mb-10 max-w-3xl text-center lg:mb-14"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className={`mb-3 text-xs font-bold uppercase tracking-[0.3em] sm:text-sm ${darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
                }`}
            >
              Get In Touch
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Let's Start Your{" "}
              <span
                className={
                  darkMode ? "text-[#32c7a5]" : "text-[#159b7c]"
                }
              >
                Career Journey
              </span>
            </h1>

            <p
              className={`mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base sm:leading-7 ${darkMode ? "text-gray-400" : "text-gray-600"
                }`}
            >
              Have questions about our courses, training programs or placement
              assistance? Our team is here to help you take the next step.
            </p>
          </motion.div>

          {/* =======================================================
            MAIN CONTACT AREA
        ======================================================= */}

          <div
            className={`grid overflow-hidden rounded-3xl border shadow-2xl lg:grid-cols-[0.9fr_1.1fr] ${darkMode
              ? "border-white/10 bg-[#0a1714]"
              : "border-black/10 bg-white"
              }`}
          >
            {/* =====================================================
              LEFT SIDE
          ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden p-6 sm:p-8 lg:p-10"
            >
              {/* Decorative background */}
              <div
                className={`absolute inset-0 ${darkMode
                  ? "bg-gradient-to-br from-[#0e2822] via-[#091814] to-[#07110f]"
                  : "bg-gradient-to-br from-[#e6f8f3] via-[#f5faf8] to-white"
                  }`}
              />

              {/* Decorative circles */}
              <div
                className={`absolute -right-20 -top-20 h-64 w-64 rounded-full border ${darkMode
                  ? "border-[#32c7a5]/10"
                  : "border-[#159b7c]/10"
                  }`}
              />

              <div
                className={`absolute -right-10 -top-10 h-44 w-44 rounded-full border ${darkMode
                  ? "border-[#32c7a5]/10"
                  : "border-[#159b7c]/10"
                  }`}
              />

              <div className="relative z-10">

                {/* =================================================
                  VISUAL / IMAGE STYLE AREA
              ================================================= */}

                <div
                  className={`relative mb-8 flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl border ${darkMode
                    ? "border-[#32c7a5]/20 bg-[#32c7a5]/5"
                    : "border-[#159b7c]/20 bg-[#159b7c]/5"
                    }`}
                >
                  {/* Glow */}
                  <div
                    className={`absolute h-40 w-40 rounded-full blur-3xl ${darkMode
                      ? "bg-[#32c7a5]/20"
                      : "bg-[#159b7c]/20"
                      }`}
                  />

                  {/* Abstract Illustration */}
                  <div className="relative flex flex-col items-center">

                    <div
                      className={`flex h-24 w-24 items-center justify-center rounded-full border-2 ${darkMode
                        ? "border-[#32c7a5]/50 bg-[#32c7a5]/10"
                        : "border-[#159b7c]/40 bg-[#159b7c]/10"
                        }`}
                    >
                      <span
                        className={`text-4xl ${darkMode
                          ? "text-[#32c7a5]"
                          : "text-[#159b7c]"
                          }`}
                      >
                        ↗
                      </span>
                    </div>

                    <h2 className="mt-5 text-xl font-bold sm:text-2xl">
                      We're Here to Help
                    </h2>

                    <p
                      className={`mt-2 max-w-xs text-center text-xs leading-5 sm:text-sm ${darkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      Talk to our team about courses, career opportunities and
                      placement assistance.
                    </p>
                  </div>
                </div>

                {/* =================================================
                  CONTACT INFORMATION
              ================================================= */}

                <div className="space-y-3">

                  {/* Phone */}
                  <a
                    href="tel:+919028777287"
                    className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${darkMode
                      ? "border-white/10 bg-white/[0.03] hover:border-[#32c7a5]/40 hover:bg-[#32c7a5]/5"
                      : "border-black/10 bg-white/70 hover:border-[#159b7c]/40 hover:bg-[#159b7c]/5"
                      }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${darkMode
                        ? "bg-[#32c7a5]/10 text-[#32c7a5]"
                        : "bg-[#159b7c]/10 text-[#159b7c]"
                        }`}
                    >
                      ☎
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Phone
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        +91 9028777287
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919028777287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${darkMode
                      ? "border-white/10 bg-white/[0.03] hover:border-[#32c7a5]/40 hover:bg-[#32c7a5]/5"
                      : "border-black/10 bg-white/70 hover:border-[#159b7c]/40 hover:bg-[#159b7c]/5"
                      }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${darkMode
                        ? "bg-[#32c7a5]/10 text-[#32c7a5]"
                        : "bg-[#159b7c]/10 text-[#159b7c]"
                        }`}
                    >
                      ◉
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Call / WhatsApp
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        +91 9028777287
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@arboracademy.in"
                    className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${darkMode
                      ? "border-white/10 bg-white/[0.03] hover:border-[#32c7a5]/40 hover:bg-[#32c7a5]/5"
                      : "border-black/10 bg-white/70 hover:border-[#159b7c]/40 hover:bg-[#159b7c]/5"
                      }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${darkMode
                        ? "bg-[#32c7a5]/10 text-[#32c7a5]"
                        : "bg-[#159b7c]/10 text-[#159b7c]"
                        }`}
                    >
                      @
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">
                        Email
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold">
                        info@arboracademy.in
                      </p>
                    </div>
                  </a>

                </div>

                {/* =================================================
                  LOCATIONS
              ================================================= */}

                <div className="mt-8">

                  <div className="mb-4 flex items-center gap-3">
                    <h3
                      className={`text-sm font-bold uppercase tracking-wider ${darkMode
                        ? "text-[#32c7a5]"
                        : "text-[#159b7c]"
                        }`}
                    >
                      Our Locations
                    </h3>

                    <div
                      className={`h-px flex-1 ${darkMode
                        ? "bg-white/10"
                        : "bg-black/10"
                        }`}
                    />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {locations.map((location, index) => (
                      <motion.div
                        key={location.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08,
                        }}
                        className={`rounded-xl border p-4 ${darkMode
                          ? "border-white/10 bg-white/[0.02]"
                          : "border-black/10 bg-white/70"
                          }`}
                      >
                        <div className="mb-2 flex items-center gap-2">

                          <span
                            className={`text-xs ${darkMode
                              ? "text-[#32c7a5]"
                              : "text-[#159b7c]"
                              }`}
                          >
                            ●
                          </span>

                          <h4 className="text-xs font-bold">
                            {location.title}
                          </h4>
                        </div>

                        <p
                          className={`text-[11px] leading-5 ${darkMode
                            ? "text-gray-500"
                            : "text-gray-600"
                            }`}
                        >
                          {location.address}
                        </p>
                      </motion.div>
                    ))}

                  </div>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
              RIGHT SIDE - CONTACT FORM
          ===================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`p-6 sm:p-8 lg:p-10 ${darkMode
                ? "border-t border-white/10 lg:border-l lg:border-t-0"
                : "border-t border-black/10 lg:border-l lg:border-t-0"
                }`}
            >
              <div className="mb-8">

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${darkMode
                    ? "bg-[#32c7a5]/10 text-[#32c7a5]"
                    : "bg-[#159b7c]/10 text-[#159b7c]"
                    }`}
                >
                  Enquiry Form
                </span>

                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                  Send Us a Message
                </h2>

                <p
                  className={`mt-2 max-w-lg text-sm leading-6 ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  Fill in your details below. Our team will contact you shortly
                  to understand your requirements.
                </p>
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      className={`mb-2 block text-xs font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all ${darkMode
                        ? "border-white/10 bg-white/[0.03] text-white placeholder:text-gray-600 focus:border-[#32c7a5] focus:ring-2 focus:ring-[#32c7a5]/10"
                        : "border-black/10 bg-gray-50 text-[#07110f] placeholder:text-gray-400 focus:border-[#159b7c] focus:ring-2 focus:ring-[#159b7c]/10"
                        }`}
                    />
                  </div>

                  <div>
                    <label
                      className={`mb-2 block text-xs font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all ${darkMode
                        ? "border-white/10 bg-white/[0.03] text-white placeholder:text-gray-600 focus:border-[#32c7a5] focus:ring-2 focus:ring-[#32c7a5]/10"
                        : "border-black/10 bg-gray-50 text-[#07110f] placeholder:text-gray-400 focus:border-[#159b7c] focus:ring-2 focus:ring-[#159b7c]/10"
                        }`}
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <label
                    className={`mb-2 block text-xs font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all ${darkMode
                      ? "border-white/10 bg-white/[0.03] text-white placeholder:text-gray-600 focus:border-[#32c7a5] focus:ring-2 focus:ring-[#32c7a5]/10"
                      : "border-black/10 bg-gray-50 text-[#07110f] placeholder:text-gray-400 focus:border-[#159b7c] focus:ring-2 focus:ring-[#159b7c]/10"
                      }`}
                  />
                </div>

                {/* Course */}
                <div>
                  <label
                    className={`mb-2 block text-xs font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Interested In
                  </label>

                  <select
                    defaultValue=""
                    className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all ${darkMode
                      ? "border-white/10 bg-[#0c1c18] text-white focus:border-[#32c7a5]"
                      : "border-black/10 bg-gray-50 text-[#07110f] focus:border-[#159b7c]"
                      }`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option>IT Courses</option>
                    <option>Certification Courses</option>
                    <option>Placement Assistance</option>
                    <option>Internship Program</option>
                    <option>Career Guidance</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Preferred Location */}
                <div>
                  <label
                    className={`mb-2 block text-xs font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Preferred Location
                  </label>

                  <select
                    defaultValue=""
                    className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all ${darkMode
                      ? "border-white/10 bg-[#0c1c18] text-white focus:border-[#32c7a5]"
                      : "border-black/10 bg-gray-50 text-[#07110f] focus:border-[#159b7c]"
                      }`}
                  >
                    <option value="" disabled>
                      Select location
                    </option>

                    <option>Pune - Baner</option>
                    <option>Pune - Kharadi</option>
                    <option>Nagpur</option>
                    <option>Bhubaneswar / Odisha</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    className={`mb-2 block text-xs font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                  >
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm outline-none transition-all ${darkMode
                      ? "border-white/10 bg-white/[0.03] text-white placeholder:text-gray-600 focus:border-[#32c7a5] focus:ring-2 focus:ring-[#32c7a5]/10"
                      : "border-black/10 bg-gray-50 text-[#07110f] placeholder:text-gray-400 focus:border-[#159b7c] focus:ring-2 focus:ring-[#159b7c]/10"
                      }`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-sm font-bold transition-all duration-300 ${darkMode
                    ? "bg-[#32c7a5] text-[#07110f] hover:bg-[#42d6b4] hover:shadow-[0_10px_35px_rgba(50,199,165,0.2)]"
                    : "bg-[#159b7c] text-white hover:bg-[#128a6e] hover:shadow-[0_10px_35px_rgba(21,155,124,0.2)]"
                    }`}
                >
                  Send Enquiry

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p
                  className={`text-center text-[11px] ${darkMode ? "text-gray-600" : "text-gray-500"
                    }`}
                >
                  Our team will get back to you as soon as possible.
                </p>
              </form>
            </motion.div>
          </div>

          {/* =======================================================
            QUICK CONTACT BAR
        ======================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mt-6 grid overflow-hidden rounded-2xl border sm:grid-cols-3 ${darkMode
              ? "border-white/10 bg-white/[0.02]"
              : "border-black/10 bg-white"
              }`}
          >
            {/* Phone */}
            <a
              href="tel:+919028777287"
              className={`flex items-center justify-center gap-3 px-5 py-4 text-center transition-colors ${darkMode
                ? "hover:bg-[#32c7a5]/5"
                : "hover:bg-[#159b7c]/5"
                }`}
            >
              <span
                className={
                  darkMode
                    ? "text-[#32c7a5]"
                    : "text-[#159b7c]"
                }
              >
                ☎
              </span>

              <span className="text-xs font-medium sm:text-sm">
                +91 9028777287
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@arboracademy.in"
              className={`flex items-center justify-center gap-3 border-y px-5 py-4 text-center transition-colors sm:border-x sm:border-y-0 ${darkMode
                ? "border-white/10 hover:bg-[#32c7a5]/5"
                : "border-black/10 hover:bg-[#159b7c]/5"
                }`}
            >
              <span
                className={
                  darkMode
                    ? "text-[#32c7a5]"
                    : "text-[#159b7c]"
                }
              >
                @
              </span>

              <span className="text-xs font-medium sm:text-sm">
                info@arboracademy.in
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9190287777287"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 px-5 py-4 text-center transition-colors ${darkMode
                ? "hover:bg-[#32c7a5]/5"
                : "hover:bg-[#159b7c]/5"
                }`}
            >
              <span
                className={
                  darkMode
                    ? "text-[#32c7a5]"
                    : "text-[#159b7c]"
                }
              >
                ◉
              </span>

              <span className="text-xs font-medium sm:text-sm">
                WhatsApp Us
              </span>
            </a>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </>


  );
}

export default ContactUs;