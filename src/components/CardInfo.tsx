"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store"; // adjust path as needed
import { removeFromCart } from "@/redux/features/card/cardslice";
import Image from "next/image";

const CartInfo = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 max-w-2xl mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
        🛒 Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.productId}
                className="flex items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="rounded object-contain w-16 h-16 bg-white"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.productId))}
                  className="text-sm text-red-600 font-semibold hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right text-lg font-bold text-green-700">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartInfo;
