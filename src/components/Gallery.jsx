import { Link } from "react-router";
import RevealOnScroll from "../Helper/Animations";
import asam from "../images/asam.png"
import carft1 from "../images/craft1.png"
import carft2 from "../images/craft2.png"
import gifts from "../images/gifts.jpeg"
import Section from "./Section";
export default function Gallery() {
  return (
    <>
    <RevealOnScroll>
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6" style={{ fontFamily: '"Poiret One", cursive' }}>
      <div className="relative group">
        <img src={asam} className="w-full object-cover h-80 " alt="lookbook1" />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-center text-white w-[90%] md:w-auto">
          <p className="text-xs md:text-base tracking-widest whitespace-nowrap md:whitespace-normal">Luxury draped delivered everywhere</p>
          <Link to="/assam" className="mt-3 bg-white text-gray-800 px-5 py-2 text-xs md:text-sm w-28 md:w-32 tracking-widest shadow inline-block">Assam</Link>
        </div>
      </div>
      <div className="relative group">
        <img src={carft1} className="w-full  object-cover h-80 " alt="lookbook2" />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-center text-white w-[90%] md:w-auto">
          <p className="text-xs md:text-base tracking-widest whitespace-nowrap md:whitespace-normal">Luxury draped delivered everywhere</p>
          <Link to="/craft" className="mt-3 bg-white text-gray-800 px-5 py-2 text-xs md:text-sm w-28 md:w-32 tracking-widest shadow inline-block">Craft</Link>
        </div>
      </div>
      <div className="relative group">
        <img src={carft2} className="w-full object-cover h-80 " alt="lookbook3" />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-center text-white w-[90%] md:w-auto">
          <p className="text-xs md:text-base tracking-widest whitespace-nowrap md:whitespace-normal">Luxury draped delivered everywhere</p>
          <Link to="/collection" className="mt-3 bg-white text-gray-800 px-5 py-2 text-xs md:text-sm w-28 md:w-32 tracking-widest shadow inline-block">Collection</Link>
        </div>
      </div>
      <div className="relative group">
        <img src={gifts} className="w-full object-cover h-80 " alt="lookbook4" />
        <div className="absolute top-1/2 right-3 -translate-y-1/2 text-center text-white w-[90%] md:w-auto">
          <p className="text-xs md:text-base tracking-widest whitespace-nowrap md:whitespace-normal">Luxury draped delivered everywhere</p>
          <Link to="/gift" className="mt-3 bg-white text-gray-800 px-5 py-2 text-xs md:text-sm w-28 md:w-32 tracking-widest shadow inline-block">Gift</Link>
        </div>
      </div>
    </section>
      <hr  className="text-pink-300 w-full mt-10"/>

      </RevealOnScroll>
      {/* <Section /> */}
      </>
  );
}
