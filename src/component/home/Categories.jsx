export function Categories() {
  return (
    <section className="pb-10  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-0 ">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our <span className="text-primary">Categories</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Mobiles", "Laptops", "Accessories", "Appliances"].map(
            (cat) => (
              <div
                key={cat}
                className="border border-primary text-center  hover:shadow-lg transition bg-linear-to-r from-slate-900 via-gray-900 to-black p-8 rounded-2xl shadow-lg"
              >
                <h3 className="font-semibold">{cat}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
