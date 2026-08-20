import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import HiringCompanies from "../components/HiringCompanies";
import Navbar from "../components/Navbar";
import PopularCourses from "../components/PopularCourses";
import WhyChooseUs from "../components/WhyChooseUs";

function Home({ darkMode, setDarkMode }) {
  return (
    <div
      className={`
        min-h-screen
        w-full
        transition-colors
        duration-500

        ${
          darkMode
            ? "bg-[#07110f] text-white"
            : "bg-[#f5faf8] text-[#07110f]"
        }
      `}
    >
      {/* NAVBAR */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* MAIN CONTENT */}
      <main className="m-0 w-full p-0">

        {/* HERO SLIDER */}
        <HeroSlider />

        {/* POPULAR COURSES */}
        <PopularCourses />

        {/* WHY CHOOSE US */}
        <WhyChooseUs
          darkMode={darkMode}
        />

        {/* HIRING COMPANIES */}
        <HiringCompanies 
          darkMode={darkMode}
        />

        {/* FOOTER */}
        <Footer
          darkMode={darkMode}
        />

      </main>
    </div>
  );
}

export default Home;