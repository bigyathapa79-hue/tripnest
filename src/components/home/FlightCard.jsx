import { motion } from "framer-motion";
import { FaPlaneDeparture } from "react-icons/fa";
import { Link } from "react-router";

const FlightCard = ({ flight }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border bg-white p-6 shadow-lg transition hover:shadow-xl"
    >
      {/* Airline */}
      <div className="flex items-center gap-4">
        <img
          src={flight.logo}
          alt={flight.airline}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-lg">{flight.airline}</h3>

          <p className="text-sm text-slate-500">Domestic Flight</p>
        </div>
      </div>

      {/* Route */}
      <div className="my-8 flex items-center justify-between">
        <div>
          <h4 className="text-xl font-bold">{flight.from}</h4>

          <p className="text-slate-500">{flight.departure}</p>
        </div>

        <div className="text-center">
          <FaPlaneDeparture className="mx-auto text-sky-500 text-2xl" />

          <p className="mt-2 text-sm text-slate-500">{flight.duration}</p>
        </div>

        <div className="text-right">
          <h4 className="text-xl font-bold">{flight.to}</h4>

          <p className="text-slate-500">{flight.arrival}</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-5">
        <div>
          <p className="text-sm text-slate-500">Starting From</p>

          <h2 className="text-3xl font-bold text-sky-600">${flight.price}</h2>
        </div>

        <Link
          to="/flights"
          className="rounded-full bg-sky-500 px-6 py-3 text-white font-semibold transition hover:bg-sky-600"
        >
          Book Flight
        </Link>
      </div>
    </motion.div>
  );
};

export default FlightCard;
