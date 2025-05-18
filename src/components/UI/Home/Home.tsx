"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAllProductsQuery } from "@/redux/api/productApi";
import Image from "next/image";
import React from "react";

const Home = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery({});

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Something went wrong.</p>
    );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.products?.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-56 object-contain bg-gray-50 p-4"
            />

            <div className="p-4 flex flex-col justify-between h-[160px]">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
              <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-bold text-indigo-600">
                  ${product.price}
                </p>
                <button className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
