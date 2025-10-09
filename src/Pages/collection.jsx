import React from "react";
import Navbar from "../components/Navbar";
import collection from "../images/collection.png";
import Footer from "../components/Footer";
import RevealOnScroll from "../Helper/Animations";
import { useCart } from "../Helper/CartContext";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import saree1 from "../images/saree1.png";
import saree2 from "../images/saree2.png";
import saree3 from "../images/saree3.png";
import saree4 from "../images/saree4.png";
import saree5 from "../images/saree5.png";
import saree6 from "../images/saree6.png";
function Collection() {
  const { addToCart } = useCart();
  
  const sarees = [
    { id: 1, src: saree1, name: "ASSAM SILK", price: 2500 },
    { id: 2, src: saree2, name: "ASSAM SILK", price: 2800 },
    { id: 3, src: saree3, name: "ASSAM SILK", price: 3200 },
    { id: 4, src: saree4, name: "ASSAM SILK", price: 2900 },
    { id: 5, src: saree5, name: "ASSAM SILK", price: 3100 },
    { id: 6, src: saree6, name: "ASSAM SILK", price: 2700 },
  ];
  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          src={collection}
          alt="hero1"
          className="w-fit h-[60vh] md:h-[75vh] lg:h-[85vh] object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{ fontFamily: '"Poiret One", cursive' }}
        >
          <p className="tracking-widest text-4xl md:text-6xl lg:text-7xl font-bold">
            COLLECTION
          </p>
        </div>
      </div>
      <div className="w-full px-4 md:px-12 lg:px-20 mt-10 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sarees.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center"
              style={{ fontFamily: '"Poiret One", cursive' }}
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-64 md:w-72 lg:w-80 h-auto object-contain rounded-md shadow-md"
              />

              <p className="mt-3 text-sm md:text-base tracking-wider">
                {item.name}
              </p>
              
              <p className="text-lg font-semibold text-gray-700 mt-2">
                ₹{item.price}
              </p>
              
              <button
                onClick={() => addToCart({
                  id: item.id,
                  name: item.name,
                  image: item.src,
                  price: item.price
                })}
                className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:opacity-80 transition-opacity font-medium"
              >
                Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
      <RevealOnScroll>
        <div className="w-full px-4 md:px-8 mt-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[img1, img2, img3, img4, img5, img6].map((src, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <Footer /> 
    </>
  );
}

export default Collection;
