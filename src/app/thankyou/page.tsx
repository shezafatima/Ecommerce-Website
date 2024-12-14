import Link from "next/link";
import { FcShipped } from "react-icons/fc";
const ThankYou = () => {
    return (
      <div className="bg-[#ee90a3] h-screen lg:mx-[53.5px] mx-[24px] -mt-4 ">


      <div className=" py-4 text-center   ">
        <h2 className="text-4xl font-bold mt-[12rem]">Thank you for shopping!</h2>
        <p className="mt-4"> Your order has been placed successfully.</p>
        <div className="flex justify-center mt-8 text-[6rem]">

        <FcShipped />
        </div>
        <Link href="/">
              <button className="mt-4 bg-[#db4566] hover:bg-white border hover:border-[#db4566] hover:text-[#db4566] text-white px-6 py-2 rounded-lg uppercase">
                Back To Home &#x2192;
              </button>
            </Link>
      </div>
      </div>
    );
  };
  
  export default ThankYou;
  