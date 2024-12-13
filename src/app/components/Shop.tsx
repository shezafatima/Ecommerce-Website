
"use client";
import itemData from "../data/item.json";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface Item {
  id: number;
  title: string;
  price: number;
  currency: string;
  image_url: string;
  description: string;
  review: string;
  isFeatured: boolean;
}

function Shop() {
  const shop = itemData.items.filter((item: Item) => item.isFeatured);
  const router = useRouter();

  const addToCart = (item: Item) => {
    const savedCart = localStorage.getItem("cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <div>
      <div className="py-[4rem] bg-[#fadce3] lg:mx-[53.5px] mx-[28px] my-6 rounded-xl">
        <div className="text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl uppercase">
            Latest products
          </h2>
        </div>
        <div className="mt-10 mx-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {shop.map((item: Item) => (
              <div key={item.id} className="flex justify-center">
                <div className="flex flex-col rounded-md bg-white overflow-hidden h-full max-w-sm">
                  <div className="text-black bg-[#db4566] text-sm sm:text-lg px-1 py-2 rounded-full text-bold absolute m-2 sm:px-2 sm:py-3 sm:m-6 ">
                    New
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                    <Image
                      src={item.image_url}
                      height="1000"
                      width="1000"
                      className="h-full w-[200px] object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={item.title}
                    />
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {item.title}
                    </p>
                    <p className="hidden sm:block text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {item.description}
                    </p>
                    <Image
                      src={item.review}
                      height={1000}
                      width={1000}
                      className="w-[10rem] mt-2"
                      alt="review"
                    />
                  </div>
                  <div className="flex justify-evenly flex-wrap">
                    <p className="text-black text-bold text-xl flex items-center mb-4">
                      $ {item.price}
                    </p>

                   
                    <button
                      onClick={() => addToCart(item)}
                      className="uppercase bg-[#db4566] px-2 py-2 mb-4 rounded-lg text-xs border text-white hover:border border-[#db4566] hover:bg-white hover:text-[#db4566] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/products"}
            className="px-6 py-3 rounded-lg border bg-white text-[#db4566] border-[#db4566] hover:text-white hover:bg-[#db4566] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          >
            View All Products
          </Link>
        </div>
      </div>
      <div className="bg-[#74c9df] rounded-lg my-[4rem] lg:mx-[53.5px] mx-[24px] ">
        <div className="flex md:justify-evenly md:flex-row flex-col mt-6 lg:p-2 lg:px-6 lg:pb-4 md:p-4 ">
          <div>
            <Image
              src={"/images/saving-img.png"}
              width={1000}
              height={1000}
              className="lg:w-[38rem]  md:w-[60rem] md:h-full  mt-4 w-[30rem]  md:px-4 lg:px-0 px-6"
              alt="saving"
            />
          </div>
          <div className="flex flex-col justify-center md:px-0 px-6">
            <h2 className="font-extrabold text-white  text-2xl lg:text-4xl uppercase md:mt-0 mt-2">Best Savings on <br /> new arrivals</h2>
            <p className="text-white md:text-xl flex flex-wrap text-md lg:w-[30rem] mt-3">
              Qui ex dolore at repellat, quia neque doloribus omnis adipisci,
              ipsum eos odio fugit ut eveniet blanditiis praesentium totam non
              nostrum dignissimos nihil eius facere et eaque. Qui, animi
              obcaecati.
            </p>
            <button className="mt-3 bg-[#328fa7] md:mx-[11rem]  py-3 mb-4 md:mb-2 lg:mb-0 border border-[#328fa7] hover:border-[#328fa7] hover:text-[#328fa7] hover:bg-[#74c9df] text-md text-white rounded-md">
              <Link href="/products">Buy Now</Link>
             </button>
          </div>
        </div>
      </div>
      <div>
      <h2 className="mt-6 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl uppercase flex justify-center">
            why shop with us
            </h2>
            <div className="flex md:flex-row flex-col justify-evenly lg:mx-[53.5px] mx-[24px] gap-6 mt-12">

            <div className="bg-gray-200 flex flex-col justify-center items-center p-6">
        <Image
        src={"/images/truck.svg"}
        width={1000}
        height={1000}
        className="w-[5rem]  text-purple-800 "
        alt="shipping"
        />
        <h2 className="uppercase text-black text-xl">free delivery</h2>
              <p className="text-black text-lg mt-2 text-center">variations of passages of Lorem Ipsum available</p>
            </div>
            <div className="bg-gray-200 flex flex-col justify-center items-center p-6">
        <Image
        src={"/images/free.svg"}
        width={1000}
        height={1000}
        className="w-[4rem]  text-purple-800 "
        alt="shipping"
        />
        <h2 className="uppercase text-black text-xl mt-3">free shiping</h2>
              <p className="text-black text-lg mt-2 text-center">variations of passages of Lorem Ipsum available</p>
            </div>
            <div className="bg-gray-200 flex flex-col justify-center items-center p-6">
        <Image
        src={"/images/high-quality.svg"}
        width={1000}
        height={1000}
        className="w-[5rem]  text-purple-800 "
        alt="shipping"
        />
        <h2 className="uppercase text-black text-xl">best quality</h2>
              <p className="text-black text-lg mt-2 text-center">variations of passages of Lorem Ipsum available</p>
            </div>



            </div>
      </div>
     
      </div>
 
  );
}

export default Shop;
