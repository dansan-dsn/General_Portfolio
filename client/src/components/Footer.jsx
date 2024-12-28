import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <p
        className="text-center p-10 md:px-20"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        &copy; {new Date().getFullYear()}
        {" - "}
        <span className="text-[#BFFF58] font-bold">SKILline</span> All rights
        reserved.
      </p>
    </>
  );
}
