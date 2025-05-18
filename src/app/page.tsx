"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const goToProductList = () => {
    router.push("/product");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-50 px-6">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4 text-center">
        Welcome to product Store
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 text-center max-w-xl mb-8">
        Find the best deals on your favorite products. From electronics to
        fashion — everything you need, in one place.
      </p>

      {/* CTA Button */}
      <button
        onClick={goToProductList}
        className="px-10 py-4 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105"
      >
        Browse Products
      </button>

      {/* Footer Note */}
      <p className="mt-10 text-sm text-gray-500">
        Powered by Next.js & Tailwind CSS • © {new Date().getFullYear()} Md.
        Sakib
      </p>
    </div>
  );
}
