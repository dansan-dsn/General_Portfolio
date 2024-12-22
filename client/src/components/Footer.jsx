import React from "react";

export default function Footer() {
  return (
    <>
      <p className="fixed text-center bottom-0 p-4 px-20">
        &copy; {new Date().getFullYear()}
        {" - "}
        <span className="text-[#BFFF58] font-bold">SKILline</span> All rights
        reserved.
      </p>
    </>
  );
}
