"use client";
import { MdCancelPresentation } from "react-icons/md";
import { useState } from "react";
import { MdPerson2 } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav>
        <div className="max-w-screen-xl items-center justify-between mx-auto p-4">
 
          <div className="flex items-center lg:justify-center justify-between w-full">
         
            <Link className="flex items-center m-4" href="index.html">
              <Image
                src="/images/favicon.png"
                alt="logo"
                width={1000}
                height={1000}
                className="mr-2 w-[30px] h-[30px]"
              />
              <span className="font-extrabold text-3xl uppercase">
                {" "}
                GIFTOS{" "}
              </span>
            </Link>

            {/* Mobile Toggle Button */}
            <div className="flex lg:hidden items-center">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isOpen ? (
                  <div className="text-black font-semibold text-3xl">
                    <MdCancelPresentation />
                  </div>
                ) : (
                  <svg
                    className="w-12 h-12 text-black font-semibold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>

        
          <div className="hidden lg:flex items-center space-x-7 justify-center   rounded-tl-xl rounded-tr-xl font-extralight py-3 bg-[#f5dce0] ">
            <Link href="/">
              <button className="active:bg-white hover:bg-white px-4 py-2  rounded-md text-gray-800  uppercase ">
                Home
              </button>
            </Link>
            <Link href="/products">
              <button className="active:bg-white hover:bg-white px-4 py-2  rounded-md text-gray-800  uppercase">
                Shop
              </button>
            </Link>
            <Link href="/#whyus">
              <button className="active:bg-white hover:bg-white px-4 py-2 text-gray-800 uppercase rounded-md">
                why us
              </button>
            </Link>
           <Link  href="/#testimonial">
              <button className="active:bg-white hover:bg-white px-4 py-2  rounded-md text-gray-800  uppercase">
                testimonial
              </button>
            </Link>
            <Link  href="/contact">
              <button className="active:bg-white hover:bg-white px-4 py-2  rounded-md text-gray-800  uppercase">
                contact us
              </button>
            </Link>
            <div className="flex">
              <div className="text-xl mt-1 ml-8">
                <MdPerson2 />
              </div>
              <Link href="/" className="mx-2 text-xl">
                Login
              </Link>
            </div>
            <div className="text-lg hover:cursor-pointer">
              <Link href="/cart" className="hover:cursor-pointer">
                <GiShoppingBag />
              </Link>
            </div>
          </div>

       
          {isOpen && (
            <div className="lg:hidden">
              <div className="mx-3 space-y-5 rounded-tl-xl rounded-tr-xl  bg-[#f5dce0] py-6">
                <Link
                  href="/"
                  className=" text-gray-700 text-lg flex justify-center  uppercase "
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  className=" text-gray-700 text-lg flex justify-center  uppercase "
                >
                  Shop
                </Link>{" "}
                <Link
                  href="/#whyus"
                  className=" text-gray-700 text-lg flex justify-center  uppercase "
                >
                  why us
                </Link>{" "}
                <Link
                  href="/#testimonial"
                  className=" text-gray-700 text-lg flex justify-center  uppercase "
                >
                  testimonial
                </Link>
                <Link
                  href="/contact"
                  className=" text-gray-700 text-lg flex justify-center  uppercase "
                >
                  Contact us
                </Link>
                <div className="flex justify-center">
                  <div className="text-xl mt-1">
                    <MdPerson2 />
                  </div>
                  <Link href="/" className="mx-2 text-xl">
                    Login
                  </Link>
                  <div className="text-lg mt-1 hover:cursor-pointer">
                    <Link href="/cart">
                      <GiShoppingBag />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;