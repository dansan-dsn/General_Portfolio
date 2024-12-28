import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a 1-second animation
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white min-h-screen flex flex-col">
      <header className="px-8 lg:px-24 py-16 flex flex-col lg:flex-row items-center lg:justify-between">
        <div
          className="lg:w-1/2 space-y-8 text-center lg:text-left"
          data-aos="fade-right"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to <br />
            <span className="text-[#76ff7b]">Dansan & Arnold's Portfolio</span>
          </h1>
          <p className="text-lg text-gray-300">
            Passionate developers crafting exceptional digital solutions to meet
            your needs. Let us bring your ideas to life with creativity and
            expertise.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border text-gray-300 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#5edc63] hover:border-[#5edc63] hover:text-gray-900 hover:shadow-lg transition duration-300"
          >
            Explore Our Services
            <FaArrowRight />
          </Link>
        </div>
      </header>

      <section
        className="bg-gray-900 py-20 px-8 lg:px-24 text-center space-y-8"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          About <span className="text-[#76ff7b]">Us</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We are a team of skilled developers and creative minds dedicated to
          delivering outstanding digital experiences. From frontend to backend,
          our work is tailored to exceed your expectations and create lasting
          impressions.
        </p>
      </section>

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-8 lg:px-24">
        <div
          className="text-center space-y-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-4xl font-extrabold text-[#76ff7b]">
            Our Expertise
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            data-aos="zoom-in"
          >
            <div className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-2xl font-bold mb-4 text-[#76ff7b]">
                Frontend Development
              </h4>
              <p className="text-gray-300">
                Building stunning, user-friendly interfaces with modern
                frameworks like React and Vue.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-2xl font-bold mb-4 text-[#76ff7b]">
                Backend Development
              </h4>
              <p className="text-gray-300">
                Creating robust, scalable, and secure server-side applications
                with Node.js and Django.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-2xl font-bold mb-4 text-[#76ff7b]">
                UI/UX Design
              </h4>
              <p className="text-gray-300">
                Designing intuitive, engaging user experiences that resonate
                with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
