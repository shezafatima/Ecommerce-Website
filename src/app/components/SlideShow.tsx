import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

interface HeroSlideshowProps {
  images: { src: string;}[];
}

const Slideshow: React.FC<HeroSlideshowProps> = ({ images }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  return (
    <div className="relative w-full sm:h-full  h-screen">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="flex flex-wrap  justify-evenly ">
              <div className="w-[35rem] lg:mt-[8rem] ">
                <h1 className="md:text-5xl text-2xl  font-extrabold text-white flex items-center sm:pt-0 pt-10">
                  Welcome To Our Gift Shop
                </h1>
                <p className="sm:text-xl text-sm text-white items-center mt-4 flex flex-wrap">
                  Sequi perspiciatis nulla reiciendis, rem, tenetur impedit,
                  eveniet non necessitatius error distinctio mollitia suscipit.
                  Nostrum fugit doloribus consequatur distinctio esse, possimus
                  maiores aliquid repellat beatae cum, perspiciatis enim,
                  accusantium perferendis.
                </p>
                <Link href="/contact">
                  <button className="uppercase mt-8 bg-[#db4566] px-8 py-3 hover:border border-[#db4566] hover:bg-[#f89cab] hover:text-[#db4566] rounded-md text-sm text-white">
                    Contact us
                  </button>
                </Link>
              </div>
 
<div className="flex items-center lg:mt-15">
  <Image
  width={1000}
  height={1000}
    src={image.src}
    alt={`Slideshow image ${index}`}
    className="object-cover rounded-lg sm:mt-0 mt-4 w-full  md:w-[250px] md:h-[505px] h-[20rem]"
  
  />
</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
