/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import ProductDetailsCard from "@/components/DetailsCard";
// adjust path
// ... other imports

import {
  useDeleteProductMutation,
  useGetsingleprouductQuery,
} from "@/redux/api/productApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

interface ProductDetailsPageProps {
  params: { productId: string };
}

const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
  const router = useRouter();
  const [deleteProduct] = useDeleteProductMutation();
  const { data, isLoading, isError } = useGetsingleprouductQuery(
    params.productId
  );
  const [quantity, setQuantity] = useState<number>(1);

  const product = data?.products;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="text-center text-red-500 text-xl font-semibold mt-20">
        Product not found or an error occurred.
      </div>
    );
  }

  const incrementQty = () => {
    setQuantity((prevQty) => {
      const newQty = prevQty + 1;
      console.log("Incremented quantity:", newQty);
      return newQty;
    });
  };

  const decrementQty = () => {
    setQuantity((prevQty) => {
      const newQty = prevQty > 1 ? prevQty - 1 : prevQty;
      console.log("Decremented quantity:", newQty);
      return newQty;
    });
  };

  const handleRemove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(params.productId);
          Swal.fire("Removed!", "Product has been removed.", "success");
          router.push("/product");
        } catch (error) {
          Swal.fire("Error!", "Failed to remove the product.", "error");
        }
      }
    });
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4">
      <ProductDetailsCard
        product={product}
        quantity={quantity}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
        totalPrice={totalPrice}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default ProductDetailsPage;
