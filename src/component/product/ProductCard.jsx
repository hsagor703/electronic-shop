import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-linear-to-r from-slate-900 via-gray-900 to-black p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.title}
        height={48}
        width={100}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-slate-100 font-semibold text-lg mb-1">
        {product.title}
      </h2>
      <p className="text-slate-400 text-sm mb-2">{product.bangla}</p>
      <div className="flex items-center justify-between mb-2">
        <span className="text-indigo-400 font-bold text-lg">
          ৳ {product.price - (product.price * product.discount) / 100}
        </span>
        {product.discount > 0 && (
          <span className="text-slate-500 line-through text-sm">
            ৳ {product.price}
          </span>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-yellow-400 font-semibold">
          {product.ratings} ⭐
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-full text-sm transition-colors duration-300">
          Buy
        </button>
      </div>
      <Link href={`/products/${product.id}`}>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-full text-sm transition-colors duration-300 w-full mt-3">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
