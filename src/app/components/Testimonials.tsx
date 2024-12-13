"use client";


import React, { useState, useEffect } from "react";


interface Testimonial {
  name: string;
  text: string;
}


const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    text: "Giftos is simply amazing! I found the perfect gift for my friend’s birthday, and the delivery was incredibly fast. Highly recommend!",
  },
  {
    name: "Sarah Lee",
    text: "I love the variety of gifts on Giftos! I was able to find something for every occasion, and the quality is top-notch. I will definitely shop here again.",
  },
  {
    name: "David Smith",
    text: "Such a wonderful experience! The website is so easy to navigate, and I found the most thoughtful gift for my mom. Thanks, Giftos!",
  },
  {
    name: "Emily Johnson",
    text: "I’ve been looking for a unique gift for my partner, and Giftos had just what I needed. The personalized gift options are a game-changer. Absolutely love it!",
  },
  {
    name: "Michael Brown",
    text: "The customer service at Giftos is outstanding! I had a few questions about my order, and they were so quick to help. I will be shopping here more often.",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

 
  const handlePrevClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="testimonial">
      <h2 className="text-black text-4xl flex justify-center font-bold">
        Testimonial
      </h2>

      <div className="w-full bg-white lg:p-12 flex justify-center">
        <div className="w-full max-w-xl p-6 bg-white rounded-lg shadow-2xl relative">
          <button
            onClick={handlePrevClick}
            className="hidden absolute md:block ml-4 left-[-53px] top-1/2 transform -translate-y-1/2 text-3xl bg-[#db4566] text-white  p-2 hover:bg-[#db4566]"
          >
            &lt;
          </button>
          <div className="text-center text-black">
            <p className="text-xl">
              {testimonials[currentTestimonialIndex].text}
            </p>
            <p className="mt-2 text-sm text-pink-600">
              - {testimonials[currentTestimonialIndex].name}
            </p>
          </div>
          <button
            onClick={handleNextClick}
            className="hidden absolute md:block right-[-53px] mr-4 top-1/2 transform -translate-y-1/2 text-3xl bg-[#db4566] text-white p-2 hover:bg-[#db4566]"
          >
            &gt;
          </button>
        </div>
      </div>

    
      <div className="md:hidden text-center mt-4">
        <button
          onClick={handlePrevClick}
          className="text-2xl bg-[#db4566] text-white  p-2 mx-2 "
        >
          &lt;
        </button>
        <button
          onClick={handleNextClick}
          className="text-2xl bg-[#db4566] text-white  p-2 mx-2 "
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
