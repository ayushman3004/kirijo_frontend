import RevealOnScroll from "../Helper/Animations";
import { Package, Recycle, MapPin } from "lucide-react";
export default function Footer() {
  return (
    <RevealOnScroll>
    <footer className="pt-12">
      <div className="px-6 md:px-12 max-w-6xl mx-auto py-10">
      <div className="grid grid-cols-3 gap-6">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center">
          <Package className="h-10 w-10 text-gray-700 mb-3" />
          <p className="text-sm font-medium">Complimentary Shipping</p>
          <p className="text-xs text-gray-500">
            Enjoy free shipping on U.S. orders over $100.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center">
          <Recycle className="h-10 w-10 text-gray-700 mb-3" />
          <p className="text-sm font-medium">Consciously Crafted</p>
          <p className="text-xs text-gray-500">
            Designed with you and the planet in mind.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center">
          <MapPin className="h-10 w-10 text-gray-700 mb-3" />
          <p className="text-sm font-medium">Come Say Hi</p>
          <p className="text-xs text-gray-500">
            We have 11 stores across the U.S.
          </p>
        </div>
      </div>
    </div>
      <div className="bg-[#F9CDFF] mt-10 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <p className="text-xs tracking-widest " style={{ fontFamily: '"Poiret One", cursive' }}>Be a part of us</p>
            <h3 className="text-2xl mb-1">NEWSLETTER</h3>
            <p className="text-xs text-gray-600">Subscribe for latest updates</p>
          </div>
          <form className="flex justify-center gap-2">
            <input type="email" placeholder="Email" className="p-2 rounded border w-64" />
            <button type="submit" className="bg-white px-4 py-2 rounded border">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
  <div>
    <p className="font-semibold mb-2">Account</p>
    <ul className="space-y-1 text-gray-600">
      <li>Login</li>
      <li>Orders</li>
      <li>Wishlist</li>
    </ul>
  </div>
  <div>
    <p className="font-semibold mb-2">Company</p>
    <ul className="space-y-1 text-gray-600">
      <li>About</li>
      <li>Careers</li>
      <li>Press</li>
    </ul>
  </div>
  <div>
    <p className="font-semibold mb-2">Need Help</p>
    <ul className="space-y-1 text-gray-600">
      <li>Shipping</li>
      <li>Returns</li>
      <li>Payment</li>
    </ul>
  </div>
  <div>
    <p className="font-semibold mb-2">Contact</p>
    <ul className="space-y-1 text-gray-600">
      <li>care@kirijo.com</li>
      <li>+91 00000 00000</li>
      <li>Mon-Fri 10am-6pm</li>
    </ul>
  </div>
</div>

    </footer>
    </RevealOnScroll>
  );
}
