/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const { data, isLoading, isError } = useGetAllProductsQuery({});

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Something went wrong.</p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-4 md:px-10">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 tracking-tight">
        Explore Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.products?.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-56 object-contain bg-gray-50 p-4"
            />

            <div className="p-5 flex flex-col justify-between h-[180px]">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                {product.title}
              </h2>

              <div className="flex items-center justify-between mt-auto">
                <p className="text-xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => router.push(`/productList/${product.id}`)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition duration-200"
                >
                  add to card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
