import { FaBug, FaDatabase, FaSearch } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { GrPersonalComputer } from "react-icons/gr";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { FaTablet } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    icon: <RiComputerLine className="size-60" />,
    subIcon: (
      <FaBug className="text-gray-300 absolute top-24 md:top-20 xl:top-20 left-15 xl:left-24 size-20 2xl:left-48 2xl:top-24" />
    ),
    title: "Web Design & Programming",
    bgColor: "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400",
    animation: "fade-up",
  },
  {
    icon: <GrPersonalComputer className="size-60" />,
    subIcon: (
      <FaDatabase className="text-gray-300 absolute top-24 md:top-20 xl:top-20 left-15 xl:left-24 size-20 2xl:left-48 2xl:top-24" />
    ),
    title: "Mobile App Development",
    bgColor: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400",
    animation: "fade-right",
  },
  {
    icon: <FaTablet className="size-60" />,
    subIcon: (
      <PiPencilSimpleLineFill className="text-gray-300 absolute top-24 md:top-20 xl:top-20 left-15 xl:left-24 size-20 2xl:left-48 2xl:top-24" />
    ),
    title: "UI/UX Design",
    bgColor: "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400",
    animation: "fade-left",
  },
  {
    icon: <MdOutlinePhoneAndroid className="size-60" />,
    subIcon: (
      <FaDatabase className="text-gray-300 absolute top-24 md:top-20 xl:top-20 left-15 xl:left-24 size-20 2xl:left-48 2xl:top-24" />
    ),
    title: "Web Hosting",
    bgColor: "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400",
    animation: "zoom-in",
  },
  {
    icon: <FaDatabase className="size-36" />,
    title: "Database Management",
    bgColor: "bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400",
    animation: "flip-up",
  },
  {
    icon: <FaTablet className="size-60" />,
    subIcon: (
      <FaSearch className="text-gray-300 absolute top-24 md:top-20 xl:top-20 left-15 xl:left-24 size-20 2xl:left-48 2xl:top-24" />
    ),
    title: "Search Engine Optimization",
    bgColor: "bg-gradient-to-r from-red-600 via-red-500 to-red-400",
    animation: "fade-up",
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-8 md:p-20 min-h-screen flex flex-col">
      <div className="flex-1">
        <div
          className="flex flex-col place-items-center text-center"
          data-aos="zoom-in"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl mb-5">
            Transforming ideas into digital solutions
          </h3>
          <p className="text-[#B4B9C1] sm:text-left md:text-lg mb-10">
            From web design to advanced app development, we offer end-to-end
            services to bring your vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-10 rounded-xl flex flex-col items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl min-h-[450px]`}
              data-aos={service.animation}
            >
              <div className="relative flex items-center text-neutral-800 justify-center mb-4 w-full h-full">
                {service.icon}
                {service.subIcon}
              </div>
              <p
                className="text-white text-center text-xl sm:text-2xl font-bold mt-4"
                style={{ textShadow: "2px 2px dark-gray" }}
              >
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
