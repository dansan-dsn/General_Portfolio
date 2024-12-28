import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";

export default function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation(); // Get the current location

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`navbar py-8 px-16 flex justify-between items-center sticky top-0 left-0 w-full bg-[#0D1117] z-10 transition-shadow ${
        isScrolled ? "shadow-md shadow-zinc-950" : "shadow-none"
      }`}
    >
      <Link
        to="/"
        className="text-4xl font-bold text-rose-800 hover:opacity-80"
        style={{ textShadow: "2px 2px 4px" }}
      >
        SKILline
      </Link>

      <div className="navs:hidden">
        <FiAlignRight
          className="text-3xl hover:text-slate-600 cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>

      <div
        className={`${
          isDropdownVisible ? "block" : "hidden"
        } absolute top-20 right-8 bg-gray-800 transition delay-700 duration-700 ease-in-out shadow-lg rounded-lg p-4 navs:flex navs:static navs:bg-transparent navs:shadow-none navs:rounded-none navs:p-0`}
      >
        <Link
          to="/"
          className={`block text-xl mx-2 my-2 navs:my-0 ${
            isActive("/")
              ? "underline text-[#BFFF58] underline-offset-8"
              : "hover:text-[#BFFF58] text-lime-600"
          }`}
          onClick={() => setIsDropdownVisible(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`block text-xl mx-2 my-2 navs:my-0 ${
            isActive("/about")
              ? "underline text-[#BFFF58] underline-offset-8"
              : "hover:text-[#BFFF58] text-lime-600"
          }`}
          onClick={() => setIsDropdownVisible(false)}
        >
          About
        </Link>
        <Link
          to="/services"
          className={`block text-xl mx-2 my-2 navs:my-0 ${
            isActive("/services")
              ? "underline text-[#BFFF58] underline-offset-8"
              : "hover:text-[#BFFF58] text-lime-600"
          }`}
          onClick={() => setIsDropdownVisible(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`block text-xl text-white btn bg-[#FF4F00] hover:bg-[#FA7C44] px-6 py-2 rounded-full mx-2 my-2 navs:my-0 ${
            isActive("/contact") ? "underline underline-offset-8" : ""
          }`}
          onClick={() => setIsDropdownVisible(false)}
        >
          Connect
        </Link>
      </div>
    </nav>
  );
}
