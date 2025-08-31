import weavers from "../images/weavers.png"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import RevealOnScroll from "../Helper/Animations"

export default function Weavers() {
  return (
    <>
    <RevealOnScroll>
    <div style={{ fontFamily: '"Poiret One", cursive' }}>
      <hr className="text-pink-300" />

      <section className="flex flex-col md:flex-row items-center gap-6 p-8">
        <div className="md:w-1/2">
          <img src={weavers} alt="weaver" className="rounded-lg" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl mb-4" style={{ fontFamily: '"Poiret One", cursive' }}>MEET OUR WEAVERS</h2>
          <p className="text-gray-600 text-justify text-xl leading-relaxed" style={{ fontFamily: '"Poiret One", cursive' }}>
            Natural indigo dyeing is a craft that's over 6,000 years old— but despite its long history, it remains remarkably alive. At 11.11 / eleven eleven, we return to this tradition not as revivalists, but as witnesses to its relevance today.
          </p>
        </div>
      </section>
      <hr className="text-pink-300 mt-5" />

    </div>
</RevealOnScroll>
<RevealOnScroll>
      <div className="flex m-5 w-full justify-center items-center">
        <div className="flex w-full justify-evenly flex-wrap gap-4">
          {[img1, img2, img3, img4, img5, img6].map((src, i) => (
            <div key={i} className="text-center object-cover">
              <img src={src} alt="" className="h-48 object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </>
  );
}
