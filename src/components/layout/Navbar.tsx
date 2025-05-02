import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../ui/Logo";

const Navbar: React.FC = () => {
  // Common class names
  const navLinkClass =
    "font-sans font-medium text-base text-gray-700 dark:text-gray-200 hover:text-gray-300 dark:hover:text-gray-500 transition-colors duration-300";
  const mobileNavLinkClass = `${navLinkClass} py-2`;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);

    // Check if we're on the home page
    if (location.pathname !== "/") {
      // If not, navigate to home page with the section as hash
      navigate(`/#${id}`);
      return;
    }

    // If we're already on the home page, scroll to the section
    const element = document.getElementById(id);
    const navbarHeight = 80; // Navbar height

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md dark:bg-charcoal" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {location.pathname === "/" ? (
            // Home page navigation
            <>
              {[
                "about",
                "background",
                "methodology",
                "results",
                "future-work",
                "ethics",
                "process",
                "conclusion",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`${navLinkClass} capitalize`}
                >
                  {item}
                </button>
              ))}
            </>
          ) : (
            // Navigation for all other pages
            <>
              <button onClick={() => navigate("/")} className={navLinkClass}>
                Home
              </button>
              <button
                onClick={() => navigate("/results-detail")}
                className={navLinkClass}
              >
                Results
              </button>
              <button
                onClick={() => navigate("/view-model")}
                className={navLinkClass}
              >
                Model
              </button>
              <button
                onClick={() => navigate("/view-report")}
                className={navLinkClass}
              >
                Report.pdf
              </button>
            </>
          )}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-charcoal shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {location.pathname === "/" ? (
              // Home page navigation
              <>
                {[
                  "about",
                  "background",
                  "methodology",
                  "results",
                  "future-work",
                  "ethics",
                  "process",
                  "conclusion",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`${mobileNavLinkClass} capitalize`}
                  >
                    {item}
                  </button>
                ))}
              </>
            ) : (
              // Navigation for all other pages
              <>
                <button
                  onClick={() => navigate("/")}
                  className={mobileNavLinkClass}
                >
                  Home
                </button>
                <button
                  onClick={() => navigate("/results-detail")}
                  className={mobileNavLinkClass}
                >
                  Results
                </button>
                <button
                  onClick={() => navigate("/view-model")}
                  className={mobileNavLinkClass}
                >
                  Model
                </button>
                <button
                  onClick={() => navigate("/view-report")}
                  className={mobileNavLinkClass}
                >
                  Report.pdf
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
