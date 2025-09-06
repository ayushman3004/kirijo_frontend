import React from 'react'
import Navbar from '../components/Navbar'
import weaver1 from '../images/WeaverHero1.png'
import weaver2 from '../images/weaver2.png'
import weaver3 from '../images/weaver3.png'
import weaver4 from '../images/weaver4.png'
import weaver5 from '../images/weaver5.png'
import Footer from '../components/Footer'
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"
import img6 from "../images/img6.png"
import RevealOnScroll from '../Helper/Animations'
function Weavers() {
  return (
    <>
    <Navbar />
    <div className='w-full px-4 md:px-12 lg:px-20 mt-10 mb-16 flex flex-col gap-8' style={{fontFamily: '"Poiret One", cursive'}}>
      <p className='text-3xl'>OUR MAKERS</p>
      <div className='flex justify-center text-justify items-end w-full'>
        <p className=''>Natural indigo dyeing is a craft that’s over 6,000 years old— but despite its long history, it remains remarkably alive. At 11.11 / eleven eleven, we return to this tradition not as revivalists, but as witnesses to its relevance today.</p>
      </div>
      <div className='flex justify-center w-full'>
        <img src={weaver1} alt="Weaver Hero" className='h-200 w-250 rounded-xl p-5 items-center'/>
      </div>
    </div>

    <div className='w-full px-4 md:px-12 lg:px-20 mt-10 mb-16 flex justify-between gap-8 text-2xl' style={{fontFamily: '"Poiret One", cursive'}}>
      <div className='flex flex-col gap-4'>
        <ul className='flex flex-col gap-9'>
          <li>Makers</li>
          <li>The Work</li>
          <li>Garments</li>
          <li>Weaving</li>
          <li>WishCare</li>
        </ul>
      </div>
      <div className='flex  flex-col gap-4 mt-70'>
        <p className='text-4xl'>The Work</p>
        <img src={weaver2} alt="" className='w-130 h-150 rounded-2xl'/>
      </div>
    </div>

    <div className='md:w-[50%] px-4 md:px-12 lg:px-20 mt-10 mb-16 flex flex-col gap-8 justify-center items-center text-center' style={{fontFamily: '"Poiret One", cursive'}}>
      <p className='text-3xl text-center w-full flex'>Weaving</p>
      <img src={weaver3} alt="" className='w-130 h-150 rounded-2xl'/>
    </div>
   <div className='md:w-[50%] px-4 md:px-12 lg:px-20 mt-10 mb-16 flex flex-col gap-8 items-end text-right ml-auto' 
  style={{fontFamily: '"Poiret One", cursive'}}>
  <p className='text-3xl'>Garmenting</p>
  <img src={weaver4} alt="" className='w-130 h-150 rounded-2xl'/>
</div>

    <div className='md:w-[50%] px-4 md:px-12 lg:px-20 mt-10 mb-16 flex flex-col gap-8 justify-center items-center text-center' style={{fontFamily: '"Poiret One", cursive'}}>
      <p className='text-3xl'>Garmenting</p>
      <img src={weaver5} alt="" className='w-130 h-150 rounded-2xl'/>
    </div>
    <RevealOnScroll>
          <div className="w-full px-4 md:px-8 mt-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[img1, img2, img3, img4, img5, img6].map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
    </RevealOnScroll>
    <Footer />
    </>
  )
}

export default Weavers