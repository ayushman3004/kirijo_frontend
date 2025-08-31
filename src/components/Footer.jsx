import RevealOnScroll from "../Helper/Animations";

export default function Footer() {
  return (
    <RevealOnScroll>
    <footer className="bg-pink-200 p-8 text-center">
      <h3 className="text-xl font-bold mb-2">Join Our Newsletter</h3>
      <p className="text-gray-600 mb-4">Subscribe for latest collections</p>
      <form className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded border"
        />
        <button type="submit" className="bg-pink-300 px-4 py-2 rounded">
          Subscribe
        </button>
      </form>
    </footer>
    </RevealOnScroll>
  );
}
