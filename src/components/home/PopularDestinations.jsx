import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

import destinations from "../../data/destinations";
import DestinationCard from "./DestinationCard";

const PopularDestinations = () => {
  return (
    <section className="bg-slate-50 pt-44 pb-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-sky-500">
            Popular Destinations
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore Nepal's Best Places
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            From the Himalayas to peaceful lakes and ancient heritage sites,
            discover unforgettable destinations across Nepal.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-sky-600 hover:shadow-xl"
          >
            View All Destinations
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
