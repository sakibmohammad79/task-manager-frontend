/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useGetAllProductsQuery } from "@/redux/api/productApi";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const { data, isLoading, isError } = useGetAllProductsQuery({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  if (isLoading) return <p className="text-center mt-10 text-lg">Loading...</p>;

  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">Something went wrong.</p>
    );

  const products = data?.products || [];
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-10 px-4 md:px-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 drop-shadow">
        🛍️ Product Showcase
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {visibleProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-5 py-2 rounded-lg font-medium ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Previous
        </button>

        <span className="font-semibold text-gray-700 mr-2 ml-2">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-5 py-2 rounded-lg font-medium ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
