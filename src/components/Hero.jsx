import hero1 from "../images/hero1.png";
import Rectangle2 from "../images/Rectangle2.png";
import RevealOnScroll from "../Helper/Animations";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <RevealOnScroll>
      <section className="flex flex-col justify-center">
        {/* First Hero Section */}
        <div className="relative">
          <img
            src={hero1}
            alt="hero1"
            className="w-full h-[60vh] md:h-[75vh] lg:h-[85vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white" style={{ fontFamily: '"Poiret One", cursive' }}>
            <p className="tracking-widest text-lg md:text-2xl lg:text-3xl">
              NEW ARRIVALS
            </p>
            <button className="mt-4 bg-white text-gray-800 px-6 py-2 text-sm md:text-base rounded">
              SHOP
            </button>
          </div>
        </div>

        {/* Second Hero Section */}
        <div className="relative p-4 md:p-8">
          <img src={Rectangle2} alt="hero2" className="w-full h-[50vh] md:h-[65vh] object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-end px-6 md:px-12 text-white text-right" style={{ fontFamily: '"Poiret One", cursive' }}>
            <p className="text-base md:text-xl lg:text-2xl leading-snug max-w-xs md:max-w-md">
              Luxury draped delivered everywhere
            </p>
            <Link
              to="/shop"
              className="mt-4 bg-white text-gray-800 px-6 py-2 text-sm md:text-base rounded"
            >
              SHOP
            </Link>
          </div>
        </div>

        <hr className="text-pink-300 font-bold" />
      </section>
    </RevealOnScroll>
  );
}
