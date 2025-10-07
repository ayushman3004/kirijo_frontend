import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { User, Search } from "lucide-react"; // icons
import Logo from "./logo";
// import assam from "../images/storyAssam.png"
export default function Navbar() {
  const isLoggedIn = false;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <>
      <div className="bg-[#F9CDFF] h-10 w-full"></div>
      <nav
        className={`flex flex-col items-center py-4 text-center transition-all  justify-center duration-700 ease-in-out${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-6xl px-6">
          {/* Left icons */}
          <div className="flex items-center gap-4"></div>

          {/* Logo in center */}
          <div className="flex items-center justify-center">
            <Logo />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4 text-sm">
            {isLoggedIn ? (
              <User size={18} className="cursor-pointer" />
            ) : (
              <Link to="/login" className="font-medium">
                {/* Login */}
              </Link>
            )}

            <Search size={18} className="cursor-pointer" />

            <Link to="/bag" className="font-medium">
              बैग
            </Link>
          </div>
        </div>

        <div className="flex w-full justify-evenly items-center mt-4 text-sm">
          <div className="flex flex-col justify-center items-center text-center ">
            <Link to="/" className="hover:opacity-70">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JibS5aRrMbqPMayXo-DnWthF01EaEl27Tw&s"
              alt=""
              className="rounded-full w-15 h-15 "
            />
              Home
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Link to="/gift" className="hover:opacity-70">
            <img
              src="https://i.pinimg.com/736x/c6/05/78/c60578e420a1da40a14d8a751a493feb.jpg"
              alt=""
              className="rounded-full w-15 h-15"
            />
              Gift
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Link to="/northeast" className="hover:opacity-70">
            <img
              src="https://shop.gaatha.com/image/catalog/data/fabrics%20of%20india/Nov-2018/14-11-18/Casual-Classics-%E2%9D%8A-Handloom-Saree-%E2%9D%8A-1.jpg"
              alt=""
              className="rounded-full w-15 h-15"
            />
              NorthEast
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Link to="/story" className="hover:opacity-70">
            <img
              src="https://i.pinimg.com/736x/07/10/66/071066371fb77bb0254bb845f6a5fa86.jpg"
              alt=""
              className="rounded-full w-15 h-15"
            />
            
              Story
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center text-center">

            <Link to="/collection" className="hover:opacity-70">
            <img
              src="https://i.etsystatic.com/37811849/r/il/90fff4/6014150218/il_fullxfull.6014150218_58jb.jpg"
              alt=""
              className="rounded-full w-15 h-15"
            />
              Collection
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Link to="/craft" className="hover:opacity-70">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUVAVP_gQlT5B8Hvjo4ViULqPbccscbm5RPA&s"
              alt=""
              className="rounded-full w-15 h-15"
            />
              Craft
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
