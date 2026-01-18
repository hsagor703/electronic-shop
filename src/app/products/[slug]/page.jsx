"use client";
import React, { useState, useEffect } from "react";
import products from "../../../../public/electronic.json"; // your JSON
import ProductDetailsSkeleton from "@/component/product/ProductDetailsSkeleton";
import ProductDetails from "@/component/product/ProductDetails";
import { useRouter } from "next/navigation";

export default function ProductDetailsPage({ params }) {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const router = useRouter()
  useEffect(() => {
    const isAuth = localStorage.getItem("auth")
    console.log(isAuth);
    if (!isAuth) {
      router.push('/login')
    }
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
