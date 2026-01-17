export function Services() {
  return (
    <section className="py-10   text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <h2 className="text-3xl font-bold text-center mb-10">Our <span className="text-primary">Services</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Free Delivery",
            "1 Year Warranty",
            "Secure Payment",
            "24/7 Support",
          ].map((service) => (
            <div
              key={service}
              className=" border border-primary text-center hover:shadow-lg transition bg-linear-to-r from-slate-900 via-gray-900 to-black p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-semibold text-lg">{service}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Reliable and trusted service for our customers.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
