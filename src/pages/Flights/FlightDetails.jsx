import { useParams } from "react-router";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

import flights from "../../data/flights";

const FlightDetails = () => {
  const { id } = useParams();

  const flight = flights.find((item) => item.id === Number(id));

  if (!flight) {
    return (
      <div className="container mx-auto py-40 text-center">
        <h2 className="text-4xl font-bold">Flight Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <img
          src={flight.image}
          alt={flight.airline}
          className="h-100 w-full rounded-3xl object-contain bg-slate-100 p-10 shadow-lg"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold">{flight.airline}</h1>

            <div className="mt-8 space-y-5 text-lg text-slate-600">
              <div className="flex items-center gap-3">
                <FaPlaneDeparture className="text-sky-500" />
                <span>
                  <strong>From:</strong> {flight.from}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPlaneArrival className="text-sky-500" />
                <span>
                  <strong>To:</strong> {flight.to}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-sky-500" />
                <span>
                  <strong>Departure:</strong> {flight.departure}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-sky-500" />
                <span>
                  <strong>Arrival:</strong> {flight.arrival}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-sky-500" />
                <span>
                  <strong>Duration:</strong> {flight.duration}
                </span>
              </div>
            </div>

            <p className="mt-10 leading-8 text-slate-600">
              Enjoy a safe and comfortable journey with {flight.airline}. We
              provide reliable domestic flights connecting major cities across
              Nepal with excellent onboard service.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-sky-500 p-8 text-white shadow-xl">
            <h3 className="flex items-center gap-2 text-4xl font-bold">
              <FaMoneyBillWave />${flight.price}
            </h3>

            <p className="mt-2">Per Passenger</p>

            <button className="mt-10 w-full rounded-xl bg-white py-4 font-bold text-sky-600 transition hover:bg-slate-100">
              Book Flight
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
