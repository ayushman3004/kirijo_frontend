import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100); 
  }, []);
  return (
    <nav className={`flex flex-col items-center py-6 text-center transition-all duration-700 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}>
      <div className="bg-pink-300 rounded-full h-10 w-10 aspect-square mb-6"></div>

      <div className="flex text-sm px-4 overflow-x-none justify-center items-center text-center w-full lg:gap-4  lg:m-8">
        <Link to="/" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">Home</Link>
        <Link to="/gift" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">Gift</Link>
        <Link to="/story" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">Story</Link>
        <Link to="/collection" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">Collection</Link>
        <Link to="/craft" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">Craft</Link>
        <Link to="/search" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">Search</Link>
        <Link to="/bag" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">बैग</Link>
        <Link to="/login" className="pr-4 md:pr-16 lg:pr-20 justify-center items-center text-center">Login/Signup</Link>
      </div>
    </nav>
  );
}
