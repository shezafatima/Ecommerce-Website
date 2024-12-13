import Image from "next/image"
import Link from "next/link"

export default function Whyus(){
    return(
        <div id="whyus">
         <div className="bg-[#6929a5] rounded-lg my-[4rem] lg:mx-[53.5px] mx-[24px] ">
        <div className="flex md:justify-evenly md:flex-row flex-col mt-6 lg:p-2 lg:px-6 lg:pb-4 md:p-4 ">
          <div>
            <Image
              src={"/images/gifts.png"}
              width={1000}
              height={1000}
              className="lg:w-[30rem]  md:w-[60rem] md:h-full  mt-4 w-[25rem]  md:px-4 lg:px-0 px-6"
              alt="saving"
            />
          </div>
          <div className="flex flex-col justify-center md:px-0 px-6">
            <h2 className="font-extrabold text-white  text-2xl lg:text-4xl uppercase md:mt-0 mt-2">gifts for your<br />love ones</h2>
            <p className="text-white md:text-xl flex flex-wrap text-md lg:w-[30rem] mt-3">
              Qui ex dolore at repellat, quia neque doloribus omnis adipisci,
              ipsum eos odio fugit ut eveniet blanditiis praesentium totam non
              nostrum dignissimos nihil eius facere et eaque. Qui, animi
              obcaecati.
            </p>
            <button className="mt-3 bg-white md:mx-[11rem]  py-3 mb-4 md:mb-2 lg:mb-0 border hover:border-white hover:text-white hover:bg-[#6929a5] text-md text-[#6929a5] rounded-md">
              <Link href="/products">Buy Now</Link>
             </button>
          </div>
        </div>
      </div>
        </div>
    )
}