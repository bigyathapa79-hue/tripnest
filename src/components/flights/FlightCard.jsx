import { Link } from "react-router";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

const FlightCard = ({ flight }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Airline Logo */}
      <div className="flex justify-center border-b bg-slate-50 p-6">
        <img
          src={flight.image}
          alt={flight.airline}
          className="h-16 object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800">{flight.airline}</h3>

        <div className="mt-5 space-y-3 text-slate-600">
          {/* From */}
          <div className="flex items-center gap-2">
            <FaPlaneDeparture className="text-sky-500" />
            <span>
              <strong>From:</strong> {flight.from}
            </span>
          </div>

          {/* To */}
          <div className="flex items-center gap-2">
            <FaPlaneArrival className="text-sky-500" />
            <span>
              <strong>To:</strong> {flight.to}
            </span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2">
            <FaClock className="text-sky-500" />
            <span>
              {flight.departure} - {flight.arrival}
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2">
            <FaClock className="text-sky-500" />
            <span>{flight.duration}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <div className="flex items-center gap-2 text-2xl font-bold text-sky-600">
            <FaMoneyBillWave />
            <span>${flight.price}</span>
          </div>

          <Link
            to={`/flight/${flight.id}`}
            className="rounded-xl bg-sky-500 px-5 py-2 font-medium text-white transition hover:bg-sky-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>

  );
};

export default FlightCard;
