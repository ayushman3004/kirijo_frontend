import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Story from "../components/Story";
import Weavers from "../components/Weaver";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Story />
      <Weavers />
      <Footer />
    </>
  );
}
