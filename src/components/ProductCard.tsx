/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/card/cardslice"; // Adjust this path to your cart slice
import Link from "next/link";

type ProductCardProps = {
  product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const quantity = 1; // default quantity for add to cart

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity,
      })
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden">
      <div className="overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-56 object-contain bg-gray-50 p-5 hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[170px]">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
          {product.title}
        </h2>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-bold text-indigo-600">${product.price}</p>

          {/* Change from Link to button to handle add to cart */}
          <button
            onClick={handleAddToCart}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-all"
          >
            Add to cart
          </button>

          {/* Optional: If you want a separate "View Details" link, add it here */}
          <Link
            href={`/product/${product.id}`}
            className="text-indigo-600 underline text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
