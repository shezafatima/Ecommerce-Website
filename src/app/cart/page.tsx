

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PiEmptyLight } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Item {
  id: number;
  title: string;
  price: number;
  image_url: string;
  quantity: number; // Store quantity here
}

const Cart = () => {
  const [cart, setCart] = useState<Item[]>([]);
  const router = useRouter();

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Remove an item from the cart
  const handleRemove = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Increase the quantity of an item
  const handleIncrease = (itemId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease the quantity of an item
  const handleDecrease = (itemId: number) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate the total price of the cart
  const calculateTotal = () => {
    if (!cart || cart.length === 0) return 0;
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Handle checkout process
  const handleCheckout = () => {
    router.push("/thankyou");
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="bg-[#ffc5d1] lg:mx-[55px] mx-[28px] -mt-4 h-screen">
      <h2 className="lg:text-4xl text-3xl font-bold mb-4 flex justify-center pt-12">
        Your Cart <FaShoppingCart />
      </h2>
      {cart.length === 0 ? (
        <div>
          <p className="text-center text-3xl mt-20 text-gray-600">
            Your cart is empty
          </p>
          <div className="flex justify-center mt-4 text-[3rem] text-gray-600">
            <PiEmptyLight />
          </div>
        </div>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4 mt-10">
                <div className="flex items-center flex-wrap justify-between md:px-20 px-2 shadow-xl selection mx-4 bg-[#ee90a3]">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image_url}
                    alt={item.title}
                    className="md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] md:p-1 p-2 object-cover rounded"
                  />
                  <div className="flex flex-col sm:ml-4">
                    <p className="text-black font-bold flex justify-center">{item.title}</p>
                    <p className="flex justify-center">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2 justify-center">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="bg-[#db4566] text-white md:px-3 md:py-1 px-[6px]  rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="bg-[#db4566] text-white md:px-3 md:py-1 px-[6px] rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-[#e24262] hover:text-white ml-4 md:text-lg text-sm"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-8 mx-10">
            <p className="text-3xl font-bold">Total: ${calculateTotal().toFixed(2)}</p>
          </div>
          <div className="flex justify-evenly flex-wrap">
            <Link href="/thankyou">
              <button
                onClick={handleCheckout}
                className="mt-4 bg-[#db4566] md:ml-10 hover:bg-white border hover:border-[#db4566] hover:text-[#db4566] text-white px-6 py-2 ml-3 rounded-lg uppercase"
              >
                Buy
              </button>
            </Link>
            <Link href="/products">
              <button className="mt-4 bg-[#db4566] hover:bg-white border hover:border-[#db4566] hover:text-[#db4566] text-white px-6 py-2 rounded-lg uppercase">
                Continue shopping &#x2192;
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

