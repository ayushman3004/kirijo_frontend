import React from 'react'
import  Section1  from '../images/section1.webp'

export default function Section() {
  return (
    <div className="relative">
                <img src={Section1} alt="hero1" className="w-full h-[500px] object-cover overflow-hidden" />
                <div className="absolute left-100 top-38 text-center  text-white" style={{ fontFamily: '"Poiret One", cursive' }}>
                  <p className="tracking-widest md:text-base text-3xl">EXPLORE THE NORTHEAST WITH US</p>
                  <button className="mt-3 bg-white text-gray-800 px-4 py-1 text-xs w-[7rem]">SHOP</button>
                </div>
    </div>
  )
}

