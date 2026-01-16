import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-linear-to-r from-slate-900 via-gray-900 to-black p-4 rounded-2xl shadow-lg animate-pulse">
      <div className="w-full h-48 bg-slate-800 rounded-xl mb-4"></div>
      <div className="h-5 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2 w-3/4"></div>
      <div className="flex justify-between items-center mb-2">
        <div className="h-5 w-16 bg-slate-700 rounded"></div>
        <div className="h-5 w-12 bg-slate-700 rounded"></div>
      </div>
      <div className="h-8 bg-slate-700 rounded-full w-full"></div>
    </div>
  );
};

export default ProductCardSkeleton;
