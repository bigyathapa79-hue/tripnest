import { Link } from "react-router";
import { FaHome, FaSearchLocation } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-br from-sky-50 to-white px-4">
      <div className="max-w-2xl text-center">
        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-sky-500 md:text-9xl">
          404
        </h1>

        {/* Icon */}
        <div className="my-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-100">
            <FaSearchLocation className="text-5xl text-sky-500" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-slate-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to exploring amazing destinations with TripNest.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-3 rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
