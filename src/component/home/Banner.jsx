export default function Banner() {
  return (
    <section className="relative bg-linear-to-r from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-indigo-600/20 text-indigo-400">
            Trusted Electronic Store
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Naap Electronic <br />
            Shop
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Your one-stop destination for genuine electronics — mobiles,
            laptops, accessories, and home appliances at the best prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
              Shop Now
            </button>

            <button className="px-8 py-3 rounded-lg border border-gray-600 hover:border-indigo-500 hover:text-indigo-400 transition">
              View Offers
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute -inset-2 bg-indigo-600/20 blur-2xl rounded-full"></div>
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Electronics"
            className="relative rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
