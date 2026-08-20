import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    const storedUser =
      sessionStorage.getItem("arborUser");

    if (!storedUser) {
      navigate("/login", {
        replace: true,
      });

      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch {
      sessionStorage.clear();

      navigate("/login", {
        replace: true,
      });
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  const role =
    user.role ||
    sessionStorage.getItem("arborRole") ||
    "admin";

  const firstName =
    user.firstName ||
    user.first_name ||
    user.username ||
    "User";

  const fullName =
    `${user.firstName || ""} ${
      user.lastName || ""
    }`.trim() || user.username;

  const roleName =
    role === "super_admin"
      ? "Super Admin"
      : role.charAt(0).toUpperCase() +
        role.slice(1);

  /*
  ========================================================
  ROLE BASED SIDEBAR
  ========================================================
  */

  const commonMenus = [
    {
      name: "Dashboard",
      icon: "⌂",
    },
    {
      name: "Notifications",
      icon: "◉",
    },
    {
      name: "Messages",
      icon: "✉",
    },
  ];

  const roleMenus = {
    admin: [
      {
        name: "Users",
        icon: "♙",
      },
      {
        name: "Students",
        icon: "♟",
      },
      {
        name: "Teachers",
        icon: "♟",
      },
      {
        name: "Courses",
        icon: "▣",
      },
      {
        name: "Classes",
        icon: "▤",
      },
      {
        name: "Attendance",
        icon: "✓",
      },
      {
        name: "Examinations",
        icon: "▥",
      },
      {
        name: "Reports",
        icon: "▦",
      },
      {
        name: "Settings",
        icon: "⚙",
      },
    ],

    super_admin: [
      {
        name: "Users",
        icon: "♙",
      },
      {
        name: "Students",
        icon: "♟",
      },
      {
        name: "Teachers",
        icon: "♟",
      },
      {
        name: "Courses",
        icon: "▣",
      },
      {
        name: "Classes",
        icon: "▤",
      },
      {
        name: "Attendance",
        icon: "✓",
      },
      {
        name: "Examinations",
        icon: "▥",
      },
      {
        name: "Reports",
        icon: "▦",
      },
      {
        name: "Settings",
        icon: "⚙",
      },
    ],

    hr: [
      {
        name: "Employees",
        icon: "♙",
      },
      {
        name: "Recruitment",
        icon: "＋",
      },
      {
        name: "Attendance",
        icon: "✓",
      },
      {
        name: "Leave Management",
        icon: "▤",
      },
      {
        name: "Payroll",
        icon: "₹",
      },
      {
        name: "Reports",
        icon: "▦",
      },
    ],

    sales: [
      {
        name: "Leads",
        icon: "♙",
      },
      {
        name: "Customers",
        icon: "♟",
      },
      {
        name: "Enquiries",
        icon: "✉",
      },
      {
        name: "Orders",
        icon: "▣",
      },
      {
        name: "Payments",
        icon: "₹",
      },
      {
        name: "Reports",
        icon: "▦",
      },
    ],

    student: [
      {
        name: "My Courses",
        icon: "▣",
      },
      {
        name: "My Classes",
        icon: "▤",
      },
      {
        name: "Attendance",
        icon: "✓",
      },
      {
        name: "Assignments",
        icon: "▥",
      },
      {
        name: "Examinations",
        icon: "▦",
      },
      {
        name: "Certificates",
        icon: "◇",
      },
    ],

    teacher: [
      {
        name: "My Classes",
        icon: "▤",
      },
      {
        name: "Students",
        icon: "♟",
      },
      {
        name: "Attendance",
        icon: "✓",
      },
      {
        name: "Assignments",
        icon: "▥",
      },
      {
        name: "Examinations",
        icon: "▦",
      },
      {
        name: "Courses",
        icon: "▣",
      },
    ],
  };

  const menus = [
    ...commonMenus,
    ...(roleMenus[role] || roleMenus.admin),
  ];

  /*
  ========================================================
  LOGOUT
  ========================================================
  */

  const handleLogout = async () => {
    try {
      await fetch(
        "http://localhost:5000/api/auth/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );
    } catch (error) {
      console.error("Logout error:", error);
    }

    sessionStorage.removeItem("arborUser");
    sessionStorage.removeItem("arborRole");

    navigate("/login", {
      replace: true,
    });
  };

  /*
  ========================================================
  DASHBOARD CONTENT
  ========================================================
  */

  const dashboardCards = [
    {
      title: "Total Students",
      value: "1,248",
      change: "+12.5%",
    },
    {
      title: "Active Courses",
      value: "36",
      change: "+4.2%",
    },
    {
      title: "Total Teachers",
      value: "84",
      change: "+8.1%",
    },
    {
      title: "Revenue",
      value: "₹8.42L",
      change: "+14.6%",
    },
  ];

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-[#050b09] text-white"
          : "min-h-screen bg-gray-100 text-gray-900"
      }
    >

      {/* SIDEBAR */}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen border-r transition-all duration-300 ${
          sidebarOpen
            ? "w-72"
            : "w-20"
        } ${
          darkMode
            ? "border-white/10 bg-[#08120f]"
            : "border-gray-200 bg-white"
        }`}
      >

        {/* LOGO */}

        <div className="flex h-20 items-center border-b border-white/10 px-5">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#32c7a5] font-bold text-[#07110f]">
            A
          </div>

          {sidebarOpen && (
            <div className="ml-3 overflow-hidden">
              <p className="whitespace-nowrap text-sm font-bold">
                ARBOR ACADEMY
              </p>

              <p className="text-[10px] tracking-widest text-[#32c7a5]">
                LMS PORTAL
              </p>
            </div>
          )}

        </div>

        {/* MENU */}

        <div className="h-[calc(100vh-80px)] overflow-y-auto px-3 py-5">

          <p
            className={`mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] ${
              darkMode
                ? "text-gray-600"
                : "text-gray-400"
            }`}
          >
            {sidebarOpen ? "Workspace" : "•••"}
          </p>

          <nav className="space-y-1">

            {menus.map((menu) => (
              <button
                key={menu.name}
                onClick={() =>
                  setActiveMenu(menu.name)
                }
                className={`flex w-full items-center rounded-xl px-3 py-3 text-left transition-all ${
                  activeMenu === menu.name
                    ? "bg-[#32c7a5]/10 text-[#32c7a5]"
                    : darkMode
                    ? "text-gray-400 hover:bg-white/5 hover:text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >

                <span className="flex w-8 shrink-0 justify-center text-lg">
                  {menu.icon}
                </span>

                {sidebarOpen && (
                  <span className="ml-2 whitespace-nowrap text-sm font-medium">
                    {menu.name}
                  </span>
                )}

              </button>
            ))}

          </nav>

        </div>
      </aside>

      {/* MAIN */}

      <main
        className={`transition-all duration-300 ${
          sidebarOpen
            ? "ml-72"
            : "ml-20"
        }`}
      >

        {/* TOP NAVBAR */}

        <header
          className={`sticky top-0 z-40 flex h-20 items-center justify-between border-b px-4 sm:px-7 ${
            darkMode
              ? "border-white/10 bg-[#050b09]/90 backdrop-blur-xl"
              : "border-gray-200 bg-white/90 backdrop-blur-xl"
          }`}
        >

          <div className="flex items-center gap-3">

            {/* SIDEBAR TOGGLE */}

            <button
              onClick={() =>
                setSidebarOpen(!sidebarOpen)
              }
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                darkMode
                  ? "bg-white/5 text-gray-300 hover:bg-white/10"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {sidebarOpen ? "←" : "→"}
            </button>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold">
                {activeMenu}
              </p>

              <p className="text-xs text-gray-500">
                Arbor Academy LMS
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 sm:gap-4">

            {/* THEME */}

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                darkMode
                  ? "bg-white/5"
                  : "bg-gray-100"
              }`}
            >
              {darkMode ? "☀" : "☾"}
            </button>

            {/* NOTIFICATION */}

            <button
              className={`hidden h-10 w-10 items-center justify-center rounded-xl sm:flex ${
                darkMode
                  ? "bg-white/5"
                  : "bg-gray-100"
              }`}
            >
              ♢
            </button>

            {/* PROFILE */}

            <div
              className={`flex items-center gap-3 rounded-xl px-2 py-1.5 ${
                darkMode
                  ? "bg-white/5"
                  : "bg-gray-100"
              }`}
            >

              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={fullName}
                  className="h-9 w-9 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#32c7a5] font-bold text-[#07110f]">
                  {firstName
                    .charAt(0)
                    .toUpperCase()}
                </div>
              )}

              <div className="hidden md:block">
                <p className="max-w-[120px] truncate text-sm font-semibold">
                  {fullName}
                </p>

                <p className="text-[10px] text-[#32c7a5]">
                  {roleName}
                </p>
              </div>

            </div>

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="hidden rounded-xl border border-red-500/20 px-4 py-2.5 text-xs font-semibold text-red-400 transition hover:bg-red-500/10 sm:block"
            >
              Logout
            </button>

          </div>
        </header>

        {/* DASHBOARD */}

        <section className="p-4 sm:p-7">

          {/* WELCOME */}

          <div className="mb-8">

            <p className="text-sm text-[#32c7a5]">
              Good day, {firstName}
            </p>

            <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
              Welcome back.
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Here's what's happening in your
              Arbor Academy workspace today.
            </p>

          </div>

          {/* CARDS */}

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {dashboardCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.05]"
                    : "border-gray-200 bg-white"
                }`}
              >

                <p className="text-xs text-gray-500">
                  {card.title}
                </p>

                <div className="mt-3 flex items-end justify-between">

                  <h2 className="text-2xl font-bold">
                    {card.value}
                  </h2>

                  <span className="text-xs font-semibold text-[#32c7a5]">
                    {card.change}
                  </span>

                </div>

              </div>
            ))}

          </div>

          {/* CONTENT */}

          <div className="mt-6 grid gap-6 xl:grid-cols-3">

            {/* MAIN ACTIVITY */}

            <div
              className={`rounded-2xl border p-6 xl:col-span-2 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-gray-200 bg-white"
              }`}
            >

              <div className="flex items-center justify-between">

                <div>
                  <h2 className="font-bold">
                    Recent Activity
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Latest LMS activity
                  </p>
                </div>

                <button className="text-xs font-semibold text-[#32c7a5]">
                  View All
                </button>

              </div>

              <div className="mt-6 space-y-4">

                {[
                  "New student registered",
                  "Course assignment updated",
                  "Teacher profile updated",
                  "New examination scheduled",
                ].map((activity, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 rounded-xl p-3 ${
                      darkMode
                        ? "bg-white/[0.03]"
                        : "bg-gray-50"
                    }`}
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#32c7a5]/10 text-[#32c7a5]">
                      ✓
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {activity}
                      </p>

                      <p className="mt-1 text-[11px] text-gray-500">
                        Recently
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* QUICK ACTIONS */}

            <div
              className={`rounded-2xl border p-6 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-gray-200 bg-white"
              }`}
            >

              <h2 className="font-bold">
                Quick Actions
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Frequently used actions
              </p>

              <div className="mt-6 grid gap-3">

                {[
                  "Add User",
                  "Create Course",
                  "View Reports",
                  "Manage Classes",
                ].map((action) => (
                  <button
                    key={action}
                    className={`rounded-xl border p-4 text-left text-sm font-medium transition ${
                      darkMode
                        ? "border-white/10 hover:border-[#32c7a5]/40 hover:bg-[#32c7a5]/5"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {action}
                  </button>
                ))}

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminHome;