import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-slate-950 text-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-15">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-indigo-400">Our Store</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We bring you reliable, modern, and high-quality electronic products
            designed to make your everyday life smarter and easier.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-linear-to-r from-slate-900 via-gray-900 to-black p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-400">
              Our Mission
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our mission is to provide affordable and trusted electronic
              products that improve productivity, comfort, and daily lifestyle.
              We focus on quality, innovation, and customer satisfaction above
              everything else.
            </p>
          </div>

          <div className="bg-linear-to-r from-slate-900 via-gray-900 to-black p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-400">
              Our Vision
            </h2>
            <p className="text-slate-300 leading-relaxed">
              We aim to become a reliable destination for modern electronics by
              continuously adapting new technology and delivering value-driven
              solutions for everyone.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose <span className="text-indigo-400">Us</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Premium Quality",
                desc: "Carefully selected electronic products with strict quality control.",
              },
              {
                title: "Affordable Price",
                desc: "Competitive pricing without compromising quality.",
              },
              {
                title: "Fast Delivery",
                desc: "Quick and reliable delivery all over the country.",
              },
              {
                title: "Customer Support",
                desc: "Friendly support to help you anytime you need.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-linear-to-r from-slate-900 via-gray-900 to-black p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1K+", label: "Products" },
            { value: "5K+", label: "Happy Customers" },
            { value: "4.8★", label: "Average Rating" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-linear-to-r from-slate-900 via-gray-900 to-black p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-3xl font-bold text-indigo-400">
                {stat.value}
              </h3>
              <p className="text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-linear-to-r from-slate-900 via-gray-900 to-black p-10 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Explore Our Products?
          </h2>
          <p className="text-slate-400 mb-6">
            Discover the latest and most reliable electronic gadgets today.
          </p>
          <Link href={'/products'}>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full transition">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
