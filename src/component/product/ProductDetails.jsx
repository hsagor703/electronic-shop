import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div className="bg-linear-to-r from-slate-900 via-gray-900 to-black p-4 rounded-2xl shadow-lg">
        <Image
          src={product.image}
          alt={product.title}
          height={100}
          width={500}
          className="w-full h-100 object-cover rounded-xl"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            {product.title}
          </h1>
          <p className="text-slate-400 mb-4">{product.bangla}</p>

          <div className="flex items-center mb-4">
            <span className="text-indigo-400 font-bold text-2xl">
              ৳ {product.price - (product.price * product.discount) / 100}
            </span>
            {product.discount > 0 && (
              <span className="text-slate-500 line-through text-lg ml-3">
                ৳ {product.price}
              </span>
            )}
          </div>

          <div className="flex items-center mb-4">
            <span className="text-yellow-400 font-semibold mr-2">
              {product.ratings} ⭐
            </span>
            <span className="text-slate-400">{product.reviews} reviews</span>
          </div>

          <p className="text-slate-300 mb-4 whitespace-pre-line">
            {product.description}
          </p>

          <div className="mb-4">
            <h3 className="text-slate-100 font-semibold mb-2">Product Info:</h3>
            <ul className="list-disc list-inside text-slate-400 space-y-1">
              {product.info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-2xl transition-colors duration-300">
              Add to Cart
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-slate-200 px-6 py-2 rounded-2xl transition-colors duration-300">
              Buy Now
            </button>
          </div>
        </div>

        {/* QnA */}
        <div className="mt-6">
          <h3 className="text-slate-100 font-semibold mb-2">
            Frequently Asked Questions
          </h3>
          <div className="space-y-2">
            {product.qna.map((qa, idx) => (
              <div key={idx} className="bg-slate-800 p-3 rounded-lg">
                <p className="text-slate-300 font-medium">Q: {qa.question}</p>
                <p className="text-slate-400 ml-2">A: {qa.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
