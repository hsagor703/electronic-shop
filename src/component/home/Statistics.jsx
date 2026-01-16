export function Statistics() {
  return (
    <section className="py-16 bg-linear-to-r from-slate-900 via-gray-900 to-black text-white">
      <h2 className="text-3xl text-center font-bold mb-10">
        Our <span className="text-primary">Statistics</span>
      </h2>
      <div className="max-w-7xl mx-auto px-6  grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          ["10K+", "Customers"],
          ["500+", "Products"],
          ["5+", "Years Experience"],
          ["99%", "Positive Reviews"],
        ].map(([value, label]) => (
          <div key={label} className="border border-primary py-4 rounded-xl">
            <h3 className="text-3xl font-bold">{value}</h3>
            <p className="text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
