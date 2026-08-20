import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navbar({ darkMode, setDarkMode }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const menus = {
    Branch: ["Pune", "Bhubaneswar", "Nagpur"],

    "All Courses": [
      "IT Courses",
      "Certification Courses",
      "Job Assistance Program",
      "Trending Courses",
      "Internship Program",
    ],

    Services: [
      "Online Training",
      "Offline Training",
    ],

    About: [
      "About Arbor",
      "Trainers Profile",
      "Our Team",
      "Careers",
    ],
  };

  // ============================================================
  // APPLY THEME
  // ============================================================

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    document.body.style.backgroundColor = darkMode
      ? "#07110f"
      : "#ffffff";

    document.body.style.color = darkMode
      ? "#ffffff"
      : "#07110f";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [darkMode]);

  // ============================================================
  // MENU
  // ============================================================

  const toggleMenu = (menu) => {
    setOpenMenu(
      openMenu === menu ? null : menu
    );
  };

  // ============================================================
  // THEME
  // ============================================================

  const handleThemeChange = () => {
    setDarkMode(
      (previousMode) => !previousMode
    );
  };

  // ============================================================
  // MOBILE MENU
  // ============================================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  // ============================================================
  // ACTIVE ROUTE
  // ============================================================

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        w-full
        border-b
        backdrop-blur-xl
        transition-all
        duration-500

        ${
          darkMode
            ? "border-white/10 bg-[#07110f]/95"
            : "border-black/10 bg-white/95"
        }
      `}
    >

      <nav
        className="
          mx-auto
          flex
          min-h-[72px]
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:min-h-[80px]
          lg:px-8
        "
      >

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          className="
            flex
            shrink-0
            flex-col
            leading-none
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        >
          <span
            className={`
              text-xl
              font-black
              tracking-[0.08em]
              transition-colors
              duration-500
              sm:text-2xl

              ${
                darkMode
                  ? "text-[#32c7a5]"
                  : "text-[#159b7c]"
              }
            `}
          >
            ARBOR
          </span>

          <span
            className={`
              mt-1
              text-[8px]
              font-semibold
              tracking-[0.4em]
              transition-colors
              duration-500
              sm:text-[10px]

              ${
                darkMode
                  ? "text-white"
                  : "text-[#07110f]"
              }
            `}
          >
            ACADEMY
          </span>
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-4 lg:flex xl:gap-5">

          {/* HOME */}

          <NavLink
            darkMode={darkMode}
            to="/home"
            active={isActive("/home")}
          >
            Home
          </NavLink>


          {/* DROPDOWN MENUS */}

          {Object.entries(menus).map(
            ([menu, items]) => (
              <div
                key={menu}
                className="relative"
                onMouseEnter={() =>
                  setOpenMenu(menu)
                }
                onMouseLeave={() =>
                  setOpenMenu(null)
                }
              >

                <button
                  type="button"
                  onClick={() =>
                    toggleMenu(menu)
                  }
                  className={`
                    flex
                    items-center
                    gap-1
                    whitespace-nowrap
                    text-sm
                    font-medium
                    transition-colors
                    duration-300

                    ${
                      darkMode
                        ? "text-gray-300 hover:text-[#32c7a5]"
                        : "text-gray-700 hover:text-[#159b7c]"
                    }
                  `}
                >
                  {menu}

                  <span
                    className={`
                      text-[8px]
                      transition-transform
                      duration-300

                      ${
                        openMenu === menu
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  >
                    ▼
                  </span>
                </button>


                {/* DESKTOP DROPDOWN */}

                <AnimatePresence>

                  {openMenu === menu && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.98,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className={`
                        absolute
                        left-0
                        top-full
                        mt-4
                        w-60
                        overflow-hidden
                        rounded-xl
                        border
                        shadow-2xl

                        ${
                          darkMode
                            ? "border-white/10 bg-[#0c1c18]"
                            : "border-black/10 bg-white"
                        }
                      `}
                    >

                      {items.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setOpenMenu(null)
                          }
                          className={`
                            block
                            w-full
                            px-4
                            py-3
                            text-left
                            text-sm
                            transition-all
                            duration-200

                            ${
                              darkMode
                                ? "text-gray-300 hover:bg-[#32c7a5]/10 hover:pl-5 hover:text-[#32c7a5]"
                                : "text-gray-700 hover:bg-[#159b7c]/10 hover:pl-5 hover:text-[#159b7c]"
                            }
                          `}
                        >
                          {item}
                        </button>
                      ))}

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            )
          )}


          {/* BATCHES */}

          <NavLink
            darkMode={darkMode}
            to="/batches"
            active={isActive("/batches")}
          >
            Batches
          </NavLink>


          {/* CONTACT */}

          <NavLink
            darkMode={darkMode}
            to="/contact-us"
            active={isActive("/contact-us")}
          >
            Contact
          </NavLink>


          {/* =================================================
              THEME BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={handleThemeChange}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className={`
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300

              ${
                darkMode
                  ? "border-white/10 bg-white/5 text-yellow-300 hover:bg-white/10"
                  : "border-gray-300 bg-gray-100 text-[#07110f] hover:bg-gray-200"
              }
            `}
          >

            <AnimatePresence
              mode="wait"
            >

              {darkMode ? (

                <motion.svg
                  key="sun"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[18px] w-[18px]"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </motion.svg>

              ) : (

                <motion.svg
                  key="moon"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.6,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </motion.svg>

              )}

            </AnimatePresence>

          </button>


          {/* =================================================
              DESKTOP LOGIN
          ================================================= */}

          <Link
            to="/login"
            className={`
              whitespace-nowrap
              rounded-full
              border
              px-4
              py-2
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                darkMode
                  ? "border-[#32c7a5] text-[#32c7a5] hover:bg-[#32c7a5] hover:text-[#07110f]"
                  : "border-[#159b7c] text-[#159b7c] hover:bg-[#159b7c] hover:text-white"
              }
            `}
          >
            Login LMS
          </Link>

        </div>


        {/* =====================================================
            MOBILE RIGHT SIDE
        ===================================================== */}

        <div
          className="
            flex
            items-center
            gap-2
            lg:hidden
          "
        >

          {/* MOBILE THEME */}

          <button
            type="button"
            onClick={handleThemeChange}
            aria-label="Change theme"
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border

              ${
                darkMode
                  ? "border-white/10 bg-white/5 text-yellow-300"
                  : "border-gray-300 bg-gray-100 text-[#07110f]"
              }
            `}
          >

            {darkMode ? (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[18px] w-[18px]"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.93 4.93l1.41 1.41" />
                <path d="M17.66 17.66l1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M6.34 17.66l-1.41 1.41" />
                <path d="M19.07 4.93l-1.41 1.41" />
              </svg>

            ) : (

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-[18px] w-[18px]"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>

            )}

          </button>


          {/* MOBILE MENU */}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(
                (previous) => !previous
              );
              setOpenMenu(null);
            }}
            aria-label="Open navigation menu"
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg

              ${
                darkMode
                  ? "text-white hover:bg-white/10"
                  : "text-[#07110f] hover:bg-black/5"
              }
            `}
          >

            <AnimatePresence mode="wait">

              {mobileMenuOpen ? (

                <motion.svg
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </motion.svg>

              ) : (

                <motion.svg
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                  }}
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </motion.svg>

              )}

            </AnimatePresence>

          </button>

        </div>

      </nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`
              overflow-hidden
              border-t
              lg:hidden

              ${
                darkMode
                  ? "border-white/10 bg-[#07110f]"
                  : "border-black/10 bg-white"
              }
            `}
          >

            <div
              className="
                mx-auto
                max-w-7xl
                px-4
                py-4
                sm:px-6
              "
            >

              {/* MOBILE HOME */}

              <MobileNavLink
                darkMode={darkMode}
                to="/home"
                active={isActive("/home")}
                onClick={closeMobileMenu}
              >
                Home
              </MobileNavLink>


              {/* MOBILE DROPDOWNS */}

              {Object.entries(menus).map(
                ([menu, items]) => (

                  <div
                    key={menu}
                    className={`
                      border-b

                      ${
                        darkMode
                          ? "border-white/10"
                          : "border-black/10"
                      }
                    `}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        toggleMenu(menu)
                      }
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        py-4
                        text-left
                        text-sm
                        font-medium

                        ${
                          darkMode
                            ? "text-gray-300"
                            : "text-gray-700"
                        }
                      `}
                    >

                      {menu}

                      <span
                        className={`
                          text-[9px]
                          transition-transform
                          duration-300

                          ${
                            openMenu === menu
                              ? "rotate-180"
                              : ""
                          }
                        `}
                      >
                        ▼
                      </span>

                    </button>


                    <AnimatePresence>

                      {openMenu === menu && (

                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          className="overflow-hidden pb-2"
                        >

                          {items.map((item) => (

                            <button
                              key={item}
                              type="button"
                              onClick={closeMobileMenu}
                              className={`
                                block
                                w-full
                                rounded-lg
                                px-4
                                py-3
                                text-left
                                text-sm

                                ${
                                  darkMode
                                    ? "text-gray-400 hover:bg-[#32c7a5]/10 hover:text-[#32c7a5]"
                                    : "text-gray-600 hover:bg-[#159b7c]/10 hover:text-[#159b7c]"
                                }
                              `}
                            >
                              {item}
                            </button>

                          ))}

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </div>

                )
              )}


              {/* MOBILE BATCHES */}

              <MobileNavLink
                darkMode={darkMode}
                to="/batches"
                active={isActive("/batches")}
                onClick={closeMobileMenu}
              >
                Batches
              </MobileNavLink>


              {/* MOBILE CONTACT */}

              <MobileNavLink
                darkMode={darkMode}
                to="/contact-us"
                active={isActive("/contact-us")}
                onClick={closeMobileMenu}
              >
                Contact
              </MobileNavLink>


              {/* MOBILE LOGIN */}

              <Link
                to="/login"
                onClick={closeMobileMenu}
                className={`
                  mt-3
                  block
                  w-full
                  rounded-full
                  border
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  transition-all

                  ${
                    darkMode
                      ? "border-[#32c7a5] text-[#32c7a5] hover:bg-[#32c7a5] hover:text-[#07110f]"
                      : "border-[#159b7c] text-[#159b7c] hover:bg-[#159b7c] hover:text-white"
                  }
                `}
              >
                Login LMS
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}


/* ============================================================
   DESKTOP NAV LINK
============================================================ */

function NavLink({
  children,
  darkMode,
  to = "#",
  active = false,
}) {
  return (
    <Link
      to={to}
      className={`
        whitespace-nowrap
        text-sm
        font-medium
        transition-colors
        duration-300

        ${
          active
            ? darkMode
              ? "text-[#32c7a5]"
              : "text-[#159b7c]"
            : darkMode
              ? "text-gray-300 hover:text-[#32c7a5]"
              : "text-gray-700 hover:text-[#159b7c]"
        }
      `}
    >
      {children}
    </Link>
  );
}


/* ============================================================
   MOBILE NAV LINK
============================================================ */

function MobileNavLink({
  children,
  darkMode,
  onClick,
  to = "#",
  active = false,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        block
        border-b
        py-4
        text-sm
        font-medium

        ${
          active
            ? darkMode
              ? "border-[#32c7a5]/30 text-[#32c7a5]"
              : "border-[#159b7c]/30 text-[#159b7c]"
            : darkMode
              ? "border-white/10 text-gray-300 hover:text-[#32c7a5]"
              : "border-black/10 text-gray-700 hover:text-[#159b7c]"
        }
      `}
    >
      {children}
    </Link>
  );
}

export default Navbar;