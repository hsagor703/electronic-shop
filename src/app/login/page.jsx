"use client";
import Logo from "@/component/layout/Logo";
import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin1@gmail.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      Swal.fire({
        title: "Login Successfully",
        icon: "success",
        draggable: true,
      });
      router.push("/products");
    } else {
      setError("Invalid Email or Password");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md border border-primary text-center text-white hover:shadow-lg transition bg-linear-to-r from-slate-900 via-gray-900 to-black p-8 rounded-2xl shadow-lg ">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h1 className="text-2xl font-bold mt-3 ">
            Welcome to <span className="text-primary">Naap Electronic</span>
          </h1>
          <p className=" text-sm mt-1">Login to explore Electronic items</p>
        </div>

        {/* Email login (optional future use) */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full border border-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {error && <p className="text-red-500 text-left">{error}</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
