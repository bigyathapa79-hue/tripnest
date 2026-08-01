import { useParams } from "react-router";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";

import tours from "../../data/tours";

const TourDetails = () => {
  const { id } = useParams();

  const tour = tours.find((item) => item.id === Number(id));

  if (!tour) {
    return (
      <div className="container mx-auto py-40 text-center">
        <h2 className="text-4xl font-bold">Tour Not Found</h2>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <img
          src={tour.image}
          alt={tour.title}
          className="h-125 w-full rounded-3xl object-cover shadow-lg"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {/* Left */}
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold">{tour.title}</h1>

            <div className="mt-8 flex flex-wrap gap-6 text-lg text-slate-600">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sky-500" />
                {tour.location}
              </div>

              <div className="flex items-center gap-2">
                <FaClock className="text-sky-500" />
                {tour.duration}
              </div>

              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                {tour.rating}
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-bold">About This Tour</h2>

            <p className="mt-5 leading-8 text-slate-600">{tour.description}</p>

            <p className="mt-5 leading-8 text-slate-600">
              Discover breathtaking landscapes, rich culture, and unforgettable
              adventures with this carefully planned tour package. Whether
              you're traveling with family, friends, or solo, this tour offers
              an amazing experience from start to finish.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-sky-500 p-8 text-white shadow-xl">
            <h3 className="flex items-center gap-2 text-4xl font-bold">
              <FaMoneyBillWave />${tour.price}
            </h3>

            <p className="mt-2">Per Person</p>

            <button className="mt-10 w-full rounded-xl bg-white py-4 font-bold text-sky-600 transition hover:bg-slate-100">
              Book Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
