import { useEffect } from "react";
import { FaCode, FaServer } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    icon: <FaCode className="text-9xl text-white" />,
    name: "Dansan",
    title: "Frontend Developer and Graphics Designer",
    description:
      "Dansan crafts engaging user interfaces with modern tools and frameworks to deliver high-quality products. Passionate about responsive design and user experience.",
    bgColor: "bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400",
    alignment: "left",
    social: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/dansan",
        icon: (
          <FaLinkedin className="text-2xl text-teal-500 hover:text-teal-700" />
        ),
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/dansan",
        icon: (
          <FaXTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
        ),
      },
      {
        platform: "GitHub",
        url: "https://github.com/dansan",
        icon: (
          <FaGithub className="text-2xl text-gray-700 hover:text-gray-800" />
        ),
      },
    ],
  },
  {
    icon: <FaServer className="text-9xl text-white" />,
    name: "Arnold",
    title: "Backend Developer and Database Manager",
    description:
      "Arnold builds robust server-side applications, APIs, and database systems for scalable and secure platforms. A backend expert focused on performance and reliability.",
    bgColor: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400",
    alignment: "right",
    social: [
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/arnold",
        icon: (
          <FaLinkedin className="text-2xl text-teal-500 hover:text-teal-700" />
        ),
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/arnold",
        icon: (
          <FaXTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
        ),
      },
      {
        platform: "GitHub",
        url: "https://github.com/arnold",
        icon: (
          <FaGithub className="text-2xl text-gray-700 hover:text-gray-800" />
        ),
      },
    ],
  },
];

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with animations
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white p-8 md:p-16 lg:p-20 flex flex-col min-h-screen">
      <div
        className="flex flex-col place-items-center text-center mb-10"
        data-aos="fade-up"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D9E8A7]">
          Meet Our Team
        </h3>
        <p className="text-gray-300 md:text-lg mt-4 max-w-2xl">
          Experts in frontend and backend development, combining their skills to
          create exceptional digital solutions.
        </p>
      </div>

      <div className="flex flex-col gap-12 mb-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              member.alignment === "left"
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } gap-8`}
            data-aos={member.alignment === "left" ? "fade-right" : "fade-left"}
          >
            <div
              className={`w-40 h-40 md:w-60 md:h-60 rounded-full flex justify-center items-center shadow-lg ${member.bgColor}`}
            >
              {member.icon}
            </div>

            <div
              className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-4"
              data-aos="fade-up"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-[#76ff7b]">
                {member.name}
              </h1>
              <h2
                className="text-lg md:text-xl text-[#BFA7A7] font-semibold"
                style={{ textShadow: "2px 2px black" }}
              >
                {member.title}
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                {member.description}
              </p>

              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {member.social.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
