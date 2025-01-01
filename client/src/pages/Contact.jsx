import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { baseUrl, postRequest } from "../utils/services";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [services, setServices] = useState([]);
  const [successMsg, setSuccessMsg] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleServices = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setServices([...services, id]);
    } else {
      setServices(services.filter((services) => services !== id));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (services.length === 0) {
      setError("Please select at least one service.");
      return;
    }

    const payload = { name, email, text, services };

    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      console.log("Payload", payload);

      const response = await postRequest(
        `${baseUrl}/create/`,
        JSON.stringify(payload)
      );

      console.log("Response", response);

      if (response.ok) {
        setSuccessMsg("Thank you! Your message has been sent.");
        setLoading(false);
        setTimeout(() => setSuccessMsg(null), 3000);
        setName("");
        setEmail("");
        setText("");
        setServices([]);
      } else {
        console.log("Response Error", response.error);
        setError(response.error || "Something went wrong. Please Try again");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
      setError("Failded to send message try again later");
    }
  };

  return (
    <div
      className="flex-grow overflow-y-auto"
      style={{
        overflow: "hidden",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="flex flex-col xl:flex-row gap-3 min-h-screen xl:justify-between px-7 xl:px-28">
        {successMsg && (
          <p className="p-2 bg-green-600 text-center text-white font-bold">
            {successMsg}
          </p>
        )}
        <section className="">
          <h2
            className="text-2xl font-bold my-20 text-[#CFAAAA] sm:flex sm:justify-center sm:text-3xl xl:block xl:text-4xl"
            data-aos="fade-up"
          >
            Need our help.
            <p>We reach your desires.</p>
          </h2>
          <div className="flex gap-4 items-center ">
            <div
              className="bg-[#181D25] grid place-items-center w-12 h-12 rounded-md"
              data-aos="flip-up"
            >
              <div className="bg-[#30323F] rounded-full h-10 w-10 grid place-items-center">
                <MdEmail className="text-2xl text-white" />
              </div>
            </div>
            <div>
              <p
                className="text-2xl text-[#979AA1]"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <b className="text-lg text-[#CDD6F6]">Mail Us: </b> me@gmail.com
              </p>
              <p className="text-[#93A7EA]">
                <b className="text-[#8A506E]">Response Time: </b> with in
                24hours
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center my-10 sm:justify-center xl:justify-start">
            <div
              className="bg-[#181D25] grid place-items-center w-12 h-12 rounded-md"
              data-aos="flip-up"
            >
              <div className="bg-[#30323F] rounded-full h-10 w-10 grid place-items-center">
                <FiPhoneCall className="text-2xl text-white" />
              </div>
            </div>
            <div>
              <p
                className="text-2xl text-[#979AA1]"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <b className="text-lg text-[#CDD6F6]">Call Us: </b> +256
                763738369
              </p>
              <p className="text-[#93A7EA]">
                <b className="text-[#8A506E]">Hours: </b> Mon-Sun 9am - 9pm
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center sm:justify-end xl:justify-start">
            <div
              className="bg-[#181D25] grid place-items-center w-12 h-12 rounded-md"
              data-aos="flip-up"
            >
              <div className="bg-[#30323F] rounded-full h-10 w-10 grid place-items-center">
                <FaLocationDot className="text-2xl text-white" />
              </div>
            </div>
            <div>
              <p
                className="text-2xl text-[#979AA1]"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <b className="text-lg text-[#CDD6F6]">Address: </b> at your door
              </p>
              <p className="text-[#93A7EA]">
                <b className="text-[#8A506E]">Servicess: </b> By appointment
                only
              </p>
            </div>
          </div>
        </section>
        <section className="mt-10 px-5 py-10 sm:p-10 w-full xl:w-3/5 h-4/5 bg-slate-700 rounded-xl bg-gradient-to-b from-[616C9A] to-[212534]">
          <h3 className="">
            <b className="text-3xl text-[#C7D8D7]">Get In Touch</b> <br />{" "}
            <span className="translate-x-6 ml-24 xl:ml-32 text-[#85BDAA]">
              Connect with us now.
            </span>
          </h3>
          <form onSubmit={handleSubmit} className="mt-20" data-aos="fade-up">
            <div className="">
              <label>
                your name <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-3 border-b-2 text-amber-700 bg-slate-700 border-gray-800 focus:outline-none focus:border-green-800 transition duration-200"
                required
              />
            </div>
            <div className="my-9">
              <label>
                your@email.com <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-3 border-b-2 text-amber-700 bg-slate-700 border-gray-800 focus:outline-none focus:border-green-800 transition duration-200"
                required
              />
            </div>
            <div className="">
              <label>
                Leave a message <span className="text-red-500">*</span>
              </label>{" "}
              <br />
              <input
                type="text"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full mt-3 border-b-2 text-amber-700 bg-slate-700 border-gray-800 focus:outline-none focus:border-green-800 transition duration-200"
                required
              />
            </div>
            <section>
              <h2 className="text-center my-5 font-bold">How to Help</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "web_design/development",
                  "web_hosting",
                  "mobile_development",
                  "database_management",
                  "ui/ux_design",
                  "search_engine optimization",
                ].map((id) => (
                  <div key={id}>
                    <input
                      type="checkbox"
                      id={id}
                      className="accent-amber-700"
                      onChange={handleServices}
                    />
                    <label htmlFor={id} className="ml-2 capitalize">
                      {id.replace("_", " ")}
                    </label>
                  </div>
                ))}
              </div>
            </section>
            <button
              type="submit"
              className="btn w-full mt-10"
              disabled={loading}
            >
              {loading ? "Sending..." : "Get Started"}
            </button>
          </form>
          {error && (
            <p className="mt-4 text-red-500 fond-bold text-center" role="alert">
              {error}
            </p>
          )}
        </section>
      </div>

      {/* Footer */}
      <div className="flex flex-col xl:flex-row xl:justify-evenly items-center py-5 gap-2">
        <div className="flex gap-4">
          <div className="bg-[#181D25] grid place-items-center rounded-md w-12 h-12">
            <Link
              to=""
              className="bg-[#3B4CBA] rounded-full h-10 w-10 grid place-items-center"
            >
              <FaFacebookF className="text-2xl text-white" />
            </Link>
          </div>
          <div className="bg-[#181D25] grid place-items-center rounded-md w-12 h-12">
            <Link
              to=""
              className="bg-[#30323F] rounded-full h-10 w-10 grid place-items-center"
            >
              <FaWhatsapp className="text-3xl text-[#43D253]" />
            </Link>
          </div>
          <div className="bg-[#181D25] grid place-items-center rounded-md w-12 h-12">
            <Link
              to=""
              className="bg-[#333F8C] rounded-full h-10 w-10 grid place-items-center"
            >
              <FaLinkedinIn className="text-2xl text-white" />
            </Link>
          </div>
          <div className="bg-[#181D25] grid place-items-center rounded-md w-12 h-12">
            <Link
              to=""
              className="bg-[#30323F] rounded-full h-10 w-10 grid place-items-center"
            >
              <FaXTwitter className="text-2xl text-white" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
