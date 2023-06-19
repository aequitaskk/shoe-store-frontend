"use client";
import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/utils/api";
import Image from "next/image";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CartPage = () => {
  const [loading, setLoading] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);
  const formattedSubTotal = parseFloat(subTotal).toFixed(2);

  const shipping = 4.99;
  const total = subTotal + shipping;

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });
      console.log(res);
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-3xl text-gray-500 font-semibold text-center mt-60">
              Your cart is empty
            </p>
            <Image
              src="/assets/empty_cart.png"
              alt="Empty Cart"
              width="200"
              height="200"
            />
          </div>
        ) : (
          <>
            <div className="mb-6 sm:mb-10 lg:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Your Cart
              </h2>
            </div>

            <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y sm:border-t ">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              <div className="flex flex-col items-end gap-4 pt-4">
                <div className="w-full rounded-lg bg-gray-100 p-4 sm:max-w-xs">
                  <div className="space-y-1">
                    <div className="flex justify-between gap-4 text-gray-500">
                      <span>Subtotal</span>
                      <span>${formattedSubTotal}</span>
                    </div>

                    <div className="flex justify-between gap-4 text-gray-500">
                      <span>Shipping</span>
                      <span>$4.99</span>
                    </div>
                  </div>

                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-start justify-between gap-4 text-gray-800">
                      <span className="text-lg font-bold">Total</span>
                      <span className="text-lg font-bold">${total}</span>
                    </div>
                  </div>
                </div>

                <button
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  onClick={handlePayment}
                >
                  Check out
                  {loading && (
                    <svg
                      className="animate-spin inline-block ml-2 h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
