import React from "react";
import Section1 from "../images/section1.webp";

export default function Section() {
  return (
    <div className="relative">
      {/* Background image */}
      <img
        src={Section1}
        alt="section1"
        className="w-full h-[60vh] md:h-[75vh] lg:h-[85vh] object-cover"
      />

      {/* Overlay content */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center"
        style={{ fontFamily: '"Poiret One", cursive' }}
      >
        <p className="tracking-widest text-lg md:text-2xl lg:text-3xl">
          EXPLORE THE NORTHEAST WITH US
        </p>
        <button className="mt-4 bg-white text-gray-800 px-6 py-2 text-sm md:text-base rounded">
          SHOP
        </button>
      </div>
    </div>
  );
}
