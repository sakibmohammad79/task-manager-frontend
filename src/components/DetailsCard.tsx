"use client";

import Image from "next/image";

interface Product {
  image: string;
  title: string;
  description?: string;
  price: number;
}

interface ProductDetailsCardProps {
  product: Product;
  quantity: number;
  incrementQty: () => void;
  decrementQty: () => void;
  totalPrice: number;
  handleRemove: () => void;
}

const ProductDetailsCard = ({
  product,
  quantity,
  incrementQty,
  decrementQty,
  totalPrice,
  handleRemove,
}: ProductDetailsCardProps) => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        {product.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="w-full h-[300px] relative bg-gray-100 rounded-lg">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <p className="text-gray-700 text-base leading-relaxed">
            {product.description || "No description available."}
          </p>

          <div className="text-2xl font-semibold text-indigo-700">
            Price per item: ${product.price.toFixed(2)}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={decrementQty}
              disabled={quantity <= 1}
              className={`w-10 h-10 rounded-full font-bold text-xl transition ${
                quantity <= 1
                  ? "bg-blue-100 text-blue-400 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              -
            </button>
            <span className="text-xl font-bold text-blue-500">{quantity}</span>
            <button
              onClick={incrementQty}
              className="w-10 h-10 rounded-full font-bold text-xl bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              +
            </button>
          </div>

          <div className="text-2xl font-bold text-green-700">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <button
            onClick={handleRemove}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow transition"
          >
            Remove Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
