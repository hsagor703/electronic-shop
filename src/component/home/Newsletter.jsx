export function Newsletter() {
  return (
    <section className="pb-10  text-white">
      <div className="max-w-xl mx-auto px-6 lg:px-0 text-center">
        <h2 className="text-3xl font-bold mb-4">
          <span className="text-primary">Subscribe</span> to Our Newsletter
        </h2>

        <div className="flex gap-2 bg-linear-to-r from-slate-900 via-gray-900 to-black p-8 rounded-2xl shadow-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded border border-primary"
          />
          <button className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
