"use client";

import { addToCart } from "@/redux/features/card/cardslice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import CartInfo from "./CardInfo";

interface Product {
  image: string;
  id: string;
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
  const dispatch = useDispatch();

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
    <div className="max-w-6xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-xl">
      <CartInfo />

      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
        {product.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
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

        {/* Product Info */}
        <div className="space-y-6">
          <p className="text-gray-700 text-base leading-relaxed">
            {product.description || "No description available."}
          </p>

          <div className="text-xl font-medium text-indigo-700">
            Price per item:{" "}
            <span className="font-bold">${product.price.toFixed(2)}</span>
          </div>

          {/* Quantity Control */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Decrease quantity"
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
            <span className="text-2xl font-semibold text-blue-600">
              {quantity}
            </span>
            <button
              aria-label="Increase quantity"
              onClick={incrementQty}
              className="w-10 h-10 rounded-full font-bold text-xl bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              +
            </button>
          </div>

          {/* Total */}
          <div className="text-2xl font-bold text-green-700">
            Total: ${totalPrice.toFixed(2)}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={handleRemove}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
            >
              Remove Product
            </button>

            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
