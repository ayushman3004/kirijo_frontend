import hero1 from "../images/hero1.png" 
import Rectangle2 from "../images/Rectangle2.png"
import RevealOnScroll from "../Helper/Animations";
export default function Hero() {
  return (
    <RevealOnScroll>
    <section className="flex flex-col justify-center  p-0.5">
        <div>
            <img src={hero1} alt="hero1" className="w-full h-fit object-cover overflow-hidden" />
        </div>
        <div className="p-5 m-10">
            <img src={Rectangle2} alt="hero2" className="w-full" />
        </div>
        <hr className="text-pink-300 font-bold" />
    </section>
    </RevealOnScroll>
  );
}
