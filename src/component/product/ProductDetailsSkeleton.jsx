import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-black p-4 rounded-2xl shadow-lg">
        <div className="w-full h-[400px] bg-slate-800 rounded-xl"></div>
      </div>

      {/* Info Skeleton */}
      <div className="flex flex-col justify-between space-y-4">
        <div>
          <div className="h-8 w-3/4 bg-slate-700 rounded mb-2"></div>
          <div className="h-5 w-1/2 bg-slate-700 rounded mb-4"></div>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-20 bg-slate-700 rounded"></div>
            <div className="h-5 w-16 bg-slate-700 rounded"></div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-5 w-12 bg-slate-700 rounded"></div>
            <div className="h-5 w-20 bg-slate-700 rounded"></div>
          </div>

          <div className="h-32 bg-slate-700 rounded mb-4"></div>

          <div className="space-y-2">
            <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
            <div className="h-4 w-full bg-slate-700 rounded"></div>
            <div className="h-4 w-5/6 bg-slate-700 rounded"></div>
          </div>

          <div className="flex gap-3 mt-4">
            <div className="h-10 w-28 bg-slate-700 rounded-2xl"></div>
            <div className="h-10 w-28 bg-slate-700 rounded-2xl"></div>
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <div className="h-6 w-1/3 bg-slate-700 rounded"></div>
          <div className="h-16 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
