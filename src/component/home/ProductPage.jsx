"use client";
import React, { useState, useEffect } from "react";

import products from "../../../public/electronic.json"; // your 12 product JSON
import ProductCardSkeleton from "../product/ProductCardSkeleton";
import ProductCard from "../product/ProductCard";

export default function ProductPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // simulate API delay
  }, []);

  return (
    <div className="mt-30">
      <h2 className="text-3xl text-center font-bold mb-10 text-base-100">
        Our <span className="text-primary">Products</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 ">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
}
