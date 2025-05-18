/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";

type ProductCardProps = {
  product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

          <Link
            href={`/product/${product.id}`}
            className="text-indigo-600 underline text-sm"
          >
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-all">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
