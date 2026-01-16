export function Blogs() {
  return (
    <section className="py-16 bg-linear-to-r from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest <span className="text-primary">Blogs</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((blog) => (
            <div key={blog} className="border border-primary rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="font-semibold">
                  Best Electronics Buying Guide
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Learn how to choose the best electronics for your needs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
