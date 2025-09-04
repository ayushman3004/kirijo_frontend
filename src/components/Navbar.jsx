import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, Search } from "lucide-react"; // icons
import Logo from "./logo";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <>
    <div className="bg-[#F9CDFF] h-10 w-full"></div>
    <nav className={`flex flex-col items-center py-4 text-center transition-all  justify-center duration-700 ease-in-out${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
      
      <div className="flex justify-between items-center w-full max-w-6xl px-6">
        {/* Left icons */}
        <div className="flex items-center gap-4">
        </div>

        {/* Logo in center */}
        <div className="flex items-center justify-center">
          <Logo />
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4 text-sm">
          <User size={18} className="cursor-pointer " />
          <Search size={18} className="cursor-pointer " />
          <Link to="/bag" className="font-medium ">
            बैग
          </Link>
        </div>
      </div>

      
      <div className="flex gap-8 mt-4 text-sm">
        <Link to="/" className="hover:opacity-70">
          Home
        </Link>
        <Link to="/gift" className="hover:opacity-70">
          Gift
        </Link>
        <Link to="/northeast" className="hover:opacity-70">
          NorthEast
        </Link>
        <Link to="/story" className="hover:opacity-70">
          Story
        </Link>
        <Link to="/collection" className="hover:opacity-70">
          Collection
        </Link>
        <Link to="/craft" className="hover:opacity-70">
          Craft
        </Link>
      </div>
    </nav>
    </>
  );
}
