
"use client"
import Slideshow from "@/app/components/SlideShow"

export default function Hero () {
 
  const images = [
    { src: '/images/slider-img.png'},
    { src: '/images/slider-img3-.png'},
  ];
  return (
    <section
      className="hero-section h-screen rounded-br-xl rounded-bl-xl  flex items-center  lg:mx-[53.5px] mx-[28px] -mt-4 justify-center transition-all duration-300 bg-[#f89cab] "
    >
 
      <div className="w-full  max-w-7xl px-4 md:px-12 py-16 ">
        <Slideshow images={images} />
      </div>
    </section>
  );
};




