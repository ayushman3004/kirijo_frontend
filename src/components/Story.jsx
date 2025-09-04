import storyAsam from "../images/storyAsam.png"
import RevealOnScroll from "../Helper/Animations";
import Section from "./Section";
export default function Story() {
  return (
    <>
    <RevealOnScroll>
      <Section />
    </RevealOnScroll>
    <RevealOnScroll>
    <section className="flex flex-col md:flex-row gap-6 items-center p-8" style={{ fontFamily: '"Poiret One", cursive' }}>
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl mb-4" style={{ fontFamily: '"Poiret One", cursive' }}>STORY OF ASSAM</h2>
        <p className="text-gray-600 text-justify text-xl" style={{ fontFamily: '"Poiret One", cursive' }}>
          Natural indigo dyeing is a craft that's over 6,000 years old— but despite its long history, it remains remarkably alive. At 11.11 / eleven eleven, we return to this tradition not as revivalists, but as witnesses to its relevance today.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src={storyAsam} className="rounded-lg" alt="Story of Assam" />
      </div>
    </section>
    </RevealOnScroll>
    <hr className="text-pink-300 font-bold" />
    </>
  );
}
