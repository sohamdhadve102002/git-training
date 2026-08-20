import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";

import AdminApp from "./admin/AdminApp";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>

      <Routes>

        {/* Welcome */}
        <Route
          path="/"
          element={
            showWelcome ? (
              <Welcome
                onComplete={() => {
                  setShowWelcome(false);
                }}
              />
            ) : (
              <Navigate
                to="/home"
                replace
              />
            )
          }
        />

        {/* Home */}
        <Route
          path="/home"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        {/* Contact */}
        <Route
          path="/contact-us"
          element={
            <ContactUs
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        {/* ONE COMMON LOGIN */}
        <Route
          path="/login"
          element={
            <Login
              darkMode={darkMode}
            />
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/*"
          element={<AdminApp />}
        />

        {/* HR */}
        <Route
          path="/hr"
          element={
            <div className="min-h-screen bg-[#07110f] p-10 text-white">
              HR Dashboard
            </div>
          }
        />

        {/* SALES */}
        <Route
          path="/sales"
          element={
            <div className="min-h-screen bg-[#07110f] p-10 text-white">
              Sales Dashboard
            </div>
          }
        />

        {/* STUDENT */}
        <Route
          path="/student"
          element={
            <div className="min-h-screen bg-[#07110f] p-10 text-white">
              Student Dashboard
            </div>
          }
        />

        {/* TEACHER */}
        <Route
          path="/teacher"
          element={
            <div className="min-h-screen bg-[#07110f] p-10 text-white">
              Teacher Dashboard
            </div>
          }
        />

        {/* INVALID URL */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;