import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

import flights from "../../data/flights";
import FlightCard from "./FlightCard";

const FlightDeals = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-sky-500">
            Flight Deals
          </span>

          <h2 className="mt-4 text-4xl font-bold">Popular Flight Routes</h2>

          <p className="mt-5 text-lg text-slate-600">
            Book affordable domestic flights across Nepal.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/flights"
            className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
          >
            View All Flights
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlightDeals;
