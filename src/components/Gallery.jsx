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
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      <div className="relative group">
        <img src={asam} className="w-full object-cover h-80 " alt="lookbook1" />
        <p className="absolute left-50 -translate-x-1/2 bottom-20 text-sm w-full  text-white" style={{ fontFamily: '"Poiret One", cursive' }}>Luxury draped delivered everywhere</p>
        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/90 text-gray-800 px-6 py-2 text-sm tracking-wide shadow group-hover:bg-white">
          Assam
        </button>
      </div>
      <div className="relative group">
        <img src={carft1} className="w-full  object-cover h-80 " alt="lookbook2" />
        <p className="absolute left-50 -translate-x-1/2 bottom-20 text-sm w-full  text-white" style={{ fontFamily: '"Poiret One", cursive' }}>Luxury draped delivered everywhere</p>
        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/90 text-gray-800 px-6 py-2 text-sm tracking-wide shadow group-hover:bg-white">
          Craft
        </button>
      </div>
      <div className="relative group">
        <img src={carft2} className="w-full object-cover h-80 " alt="lookbook3" />
        <p className="absolute left-50 -translate-x-1/2 bottom-20 text-sm w-full  text-white" style={{ fontFamily: '"Poiret One", cursive' }}>Luxury draped delivered everywhere</p>
        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/90 text-gray-800 px-6 py-2 text-sm tracking-wide shadow group-hover:bg-white">
          Collection
        </button>
      </div>
      <div className="relative group">
        <img src={gifts} className="w-full object-cover h-80 " alt="lookbook4" />
        <p className="absolute left-50 -translate-x-1/2 bottom-20 text-sm w-full  text-white" style={{ fontFamily: '"Poiret One", cursive' }}>Luxury draped delivered everywhere</p>
        <button className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white/90 text-gray-800 px-6 py-2 text-sm tracking-wide shadow group-hover:bg-white">
          Gift
        </button>
      </div>
    </section>
      <hr  className="text-pink-300 w-full mt-10"/>

      </RevealOnScroll>
      {/* <Section /> */}
      </>
  );
}
