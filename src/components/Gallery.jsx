import RevealOnScroll from "../Helper/Animations";
import asam from "../images/asam.png"
import carft1 from "../images/craft1.png"
import carft2 from "../images/craft2.png"
import gifts from "../images/gifts.jpeg"
export default function Gallery() {
  return (
    <>
    <RevealOnScroll>
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      <div className="text-center">
        <img src={asam} className="w-full object-cover h-80 " alt="lookbook1" />
        <p className="text-center">Assam</p>
      </div>
      <div  className="text-center">
        <img src={carft1} className="w-full  object-cover h-80 " alt="lookbook2" />
        <p className="text-center">Craft</p>
      </div>
      <div className="text-center">
        <img src={carft2} className="w-full object-cover h-80 " alt="lookbook3" />
        <p className="text-center">Collection</p>
      </div>
      <div className="text-center">
        <img src={gifts} className="w-full object-cover h-80 " alt="lookbook4" />
        <p className="text-center">Gift</p>
      </div>
    </section>
      <hr  className="text-pink-300 w-full mt-10"/>
      </RevealOnScroll>
      </>
  );
}
