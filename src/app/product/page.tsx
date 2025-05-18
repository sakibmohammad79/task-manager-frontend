/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import ProductCard from "@/components/ProductCard";
import CartInfo from "@/components/CardInfo"; // <-- import here

export default function HomePage() {
  const { data, isLoading, isError } = useGetAllProductsQuery({});

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Something went wrong.</p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-4 md:px-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 drop-shadow">
        🛍️ Product Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data?.products?.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
