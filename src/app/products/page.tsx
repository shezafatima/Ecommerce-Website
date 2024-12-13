
// "use client";

// import Image from "next/image";
// import itemData from "../data/item.json";
// import { useRouter } from "next/navigation";
// import Footer from "../components/Footer";

// export default function Product() {
//   const router = useRouter();

 
//   const addToCart = (item: unknown) => {
//     const savedCart = localStorage.getItem("cart");
//     const cart = savedCart ? JSON.parse(savedCart) : [];
//     cart.push(item);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     router.push("/cart");
//   };

//   return (
//     <div>

//     <div className="min-h-screen bg-[#ffc5d1] lg:mx-[53.5px] mx-[27px] -mt-4 rounded-b-xl lg:pb-8 ">
//       <h2 className="flex justify-center text-black lg:text-6xl font-bold pt-6 text-4xl">Our Products</h2>
//       <div className="mt-10 mx-8">
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//           {itemData.items.map((item) => (
//             <div key={item.id} className="flex justify-center">
//               <div className="flex flex-col rounded-md bg-white overflow-hidden h-full max-w-sm">
//                 <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
//                   <Image
//                     src={item.image_url}
//                     height="1000"
//                     width="1000"
//                     className="h-full w-[200px] object-cover rounded-xl group-hover/card:shadow-xl"
//                     alt={item.title}
//                     />
//                   <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
//                     {item.title}
//                   </p>
//                   <p className="hidden sm:block text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
//                     {item.description}
//                   </p>
//                   <Image
//                     src={item.review}
//                     height={1000}
//                     width={1000}
//                     className="w-[10rem] mt-2"
//                     alt="review"
//                     />
//                 </div>
//                 <div className="flex justify-evenly flex-wrap">
//                   <p className="text-black text-bold text-xl flex items-center mb-4">$ {item.price}</p>

                 
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="uppercase bg-[#db4566] px-2 py-2 mb-4 rounded-lg text-xs border text-white hover:border border-[#db4566] hover:bg-white hover:text-[#db4566] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
//                     >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//       <Footer/>
//                     </div>
//   );
// }
// Product Component (updated)
"use client";

import Image from "next/image";
import itemData from "../data/item.json";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";

export default function Product() {
  const router = useRouter();

  // Add quantity here
  const addToCart = (item:object) => {
    const itemWithQuantity = { ...item, quantity: 1 }; // Add the quantity property
    const savedCart = localStorage.getItem("cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];
    cart.push(itemWithQuantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/cart");
  };

  return (
    <div>
      <div className="min-h-screen bg-[#ffc5d1] lg:mx-[53.5px] mx-[27px] -mt-4 rounded-b-xl lg:pb-8 ">
        <h2 className="flex justify-center text-black lg:text-6xl font-bold pt-6 text-4xl">Our Products</h2>
        <div className="mt-10 mx-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {itemData.items.map((item) => (
              <div key={item.id} className="flex justify-center">
                <div className="flex flex-col rounded-md bg-white overflow-hidden h-full max-w-sm">
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
                    <p className="text-black text-bold text-xl flex items-center mb-4">$ {item.price}</p>

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
      </div>
      <Footer />
    </div>
  );
}
