import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

import tours from "../../data/tours";
import TourCard from "./TourCard";

const FeaturedTours = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-sky-500">
            Featured Tours
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Discover Our Best Tour Packages
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Explore Nepal with carefully selected travel experiences,
            breathtaking destinations, and unforgettable adventures.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <Link
            to="/tours"
            className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-sky-600 hover:shadow-xl"
          >
            View All Tours
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
