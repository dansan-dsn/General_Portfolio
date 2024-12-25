import React from "react";

export default function Footer() {
  return (
    <>
      <p className="text-center px-10 md:px-20">
        &copy; {new Date().getFullYear()}
        {" - "}
        <span className="text-[#BFFF58] font-bold">SKILline</span> All rights
        reserved.
      </p>
    </>
  );
}
