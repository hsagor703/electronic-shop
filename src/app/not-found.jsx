import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-6 text-center">
      <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-600">
        Page Not Found
      </h2>

      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
