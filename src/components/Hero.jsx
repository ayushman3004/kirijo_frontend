import hero1 from "../images/hero1.png" 
import Rectangle2 from "../images/Rectangle2.png"
import RevealOnScroll from "../Helper/Animations";
export default function Hero() {
  return (
    <RevealOnScroll>
    <section className="flex flex-col justify-center  p-0.5">
        <div className="relative">
            <img src={hero1} alt="hero1" className="w-full h-[650px] object-cover overflow-hidden" />
            <div className="absolute left-50 top-52 text-center  text-white" style={{ fontFamily: '"Poiret One", cursive' }}>
              <p className="tracking-widest md:text-base text-3xl">NEW ARRIVALS</p>
              <button className="mt-3 bg-white text-gray-800 px-4 py-1 text-xs w-[7rem]">SHOP</button>
            </div>
        </div>
        <div className="p-5 m-10 relative">
            <img src={Rectangle2} alt="hero2" className="w-full" />
            <div className="absolute right-18  text-center top-1/2 -translate-y-1/2 text-white max-w-sm" style={{ fontFamily: '"Poiret One", cursive' }}>
              <p className="text-lg md:text-2xl leading-snug">Luxury draped delivered everywhere</p>
              <button className="mt-4 bg-white text-gray-800 px-5 py-2 text-sm">Shop</button>
            </div>
        </div>
        <hr className="text-pink-300 font-bold" />
    </section>
    </RevealOnScroll>
  );
}
