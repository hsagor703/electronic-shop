export function Testimonials() {
  return (
    <section className="pb-10  text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our <span className="text-primary">Customers</span> Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Great service!", "Best electronics shop!", "Highly recommended!"].map(
            (review, i) => (
              <div
                key={i}
                className="  text-center border border-primary  bg-linear-to-r from-slate-900 via-gray-900 to-black p-8 rounded-2xl shadow-lg"
              >
                <p className="text-gray-600">“{review}”</p>
                <h4 className="mt-4 font-semibold">Customer {i + 1}</h4>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
