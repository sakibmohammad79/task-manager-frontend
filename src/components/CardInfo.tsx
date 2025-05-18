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
    <div className="p-5 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.productId}
                className="flex items-center justify-between mb-3"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.productId))}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartInfo;
