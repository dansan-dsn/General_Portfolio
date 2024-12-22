import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] overflow-hidden">
      <div className="flex justify-between px-20">
        <div className="mt-28">
          <p className="text-white text-xl">
            We are <span className="text-[#8BB449] font-bold">Dansan</span> &{" "}
            <span className="text-[#8BB449] font-bold">Arnold</span> personate
            developers and <br />
            creative minds.
          </p>
          <Link
            to="/services"
            className="btn btn-outline hover:btn-success text-lg mt-80"
          >
            Our Offers <FiArrowRight />
          </Link>
        </div>
        <section className="mt-56 mb-20 text-8xl relative">
          <div className="m-20">
            <p className="mb-5 text-[#CABFBF] font-bold">We can</p>
            <p className="mb-5 text-[#CABFBF] font-bold">reach your</p>
            <p className="mb-5 text-[#CABFBF] font-bold">expectations</p>
          </div>

          {/* Right Vertical Gradient Line */}
          <div
            className="absolute top-0 bottom-0 right-0 w-[2px] h-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, red, purple, transparent)",
            }}
          ></div>

          {/* Bottom Horizontal Gradient Line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(to right, transparent, red, purple, transparent)",
            }}
          ></div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
