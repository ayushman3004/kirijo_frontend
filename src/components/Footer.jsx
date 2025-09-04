import RevealOnScroll from "../Helper/Animations";

export default function Footer() {
  return (
    <RevealOnScroll>
    <footer className="pt-12">
      <div className="grid grid-cols-3 gap-6 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full border mb-2"></div>
          <p className="text-sm">Complimentary Shipping</p>
          <p className="text-xs text-gray-500">On orders above select value</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full border mb-2"></div>
          <p className="text-sm">Contact & Care</p>
          <p className="text-xs text-gray-500">Care@kirijo.com</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-10 w-10 rounded-full border mb-2"></div>
          <p className="text-sm">Store Finder</p>
          <p className="text-xs text-gray-500">Find us near you</p>
        </div>
      </div>

      <div className="bg-pink-200 mt-10 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <p className="text-xs tracking-widest">KIR I JO</p>
            <h3 className="text-2xl mb-1">NEWSLETTER</h3>
            <p className="text-xs text-gray-600">Subscribe for latest updates</p>
          </div>
          <form className="flex justify-center gap-2">
            <input type="email" placeholder="Email" className="p-2 rounded border w-64" />
            <button type="submit" className="bg-white px-4 py-2 rounded border">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
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
