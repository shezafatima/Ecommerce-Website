import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#2d2d2d] mx-[24px] lg:mx-[53px] mb-12 ">
    
        <div className="flex justify-center pt-10 my-8  text-slate-300  text-bold text-2xl space-x-6 lg:my-10">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <TfiYoutube />
        </div>
        <div className="md:grid lg:grid-cols-4 lg:gap-10 pl-8 md:grid-cols-2  md:space-y-6 space-y-8 lg:space-y-0 flex flex-col flex-wrap ">
          <div>
            <h2 className="uppercase text-lg text-white font-bold">About us</h2>
            <p className="text-slate-300 text-md  lg:w-[18rem] font-thin mt-4 sm:w-0 w-[15rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div>
            <h2 className="uppercase text-lg text-white font-bold mb-2">
              news letter
            </h2>
            <form action="#" className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="lg:px-4 lg:py-1 mr-20 py-2 text-black text-md  outline-none px-1"
              />
              <button className="text-center lg:mr-[4rem] mr-[15rem] mt-2 hover:bg-[#db4f66] bg-[#e48998] text-white text-md uppercase  py-2 ">
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <h2 className="uppercase text-lg text-white font-bold">
              need help
            </h2>
            <p className="text-slate-300 text-md  lg:w-[18rem] font-thin mt-4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doLorem ipsum dolor sit amet,
            </p>
          </div>
          <div>
            <h2 className="uppercase text-lg text-white font-bold">
              contact us
            </h2>
            <div>
              <div className="flex mt-4">
                <div className="text-white mt-1 text-md">
                  <IoLocationSharp />
                </div>
                <p className="hover:cursor-pointer text-slate-300 hover:text-white ml-1">
                  GB road 123 london UK
                </p>
              </div>

              <div className="flex mt-4">
                <div className="text-white mt-1 text-sm">
                  <FaPhoneAlt />
                </div>
                <p className="hover:cursor-pointer text-slate-300 hover:text-white ml-1">
                  +1 12345678901
                </p>
              </div>
              <div className="flex mt-4">
                <div className="text-white mt-1 text-md ">
                  <IoMail />
                </div>
                <p className="hover:cursor-pointer text-slate-300 hover:text-white ml-1">
                  giftos@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 flex justify-center mx-[8rem] mt-10"></hr>
        <p className="text-md font-semibold py-8 text-slate-300 flex justify-center">&copy; 2024 All Rights Reserved By Giftos</p>
        <p className="text-md font-semibold py-8 text-slate-300 flex justify-center">Designed and Developed By Sheza Fatima</p>
      </div>
    </div>
  );
}
