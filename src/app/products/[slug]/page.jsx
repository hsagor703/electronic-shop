"use client";
import React, { useState, useEffect } from "react";
import products from "../../../../public/electronic.json"; // your JSON
import ProductDetailsSkeleton from "@/component/product/ProductDetailsSkeleton";
import ProductDetails from "@/component/product/ProductDetails";

export default function ProductDetailsPage({ params }) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchPromise = async () => {
      const { slug } = await params;
      setTimeout(() => {
        const data = products.find((p) => p.id === Number(slug));
        setProduct(data);
        setLoading(false);
      }, 1500); // simulate API delay
    };
    fetchPromise();
  }, []);

  return (
    <div className="mt-20">
      {loading || !product ? (
        <ProductDetailsSkeleton />
      ) : (
        <ProductDetails product={product} />
      )}
    </div>
  );
}
