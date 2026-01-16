export function FAQ() {
  return (
    <section className="py-16 mb-18 bg-linear-to-r from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently <span className="text-primary">Asked</span> Questions
        </h2>

        <div className="space-y-4">
          {[
            "Do you provide warranty?",
            "Is Cash on Delivery available?",
            "How long does delivery take?",
          ].map((q, i) => (
            <div key={i} className="border border-primary p-4 rounded-lg shadow">
              <h4 className="font-semibold">{q}</h4>
              <p className="text-gray-600 text-sm mt-2">
                Yes, we provide reliable service and fast delivery.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
