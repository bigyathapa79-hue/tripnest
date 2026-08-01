import { Link } from "react-router";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const TourCard = ({ tour }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={tour.image}
        alt={tour.title}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold">{tour.title}</h3>

        <div className="mt-4 space-y-2 text-slate-600">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-sky-500" />
            {tour.location}
          </p>

          <p className="flex items-center gap-2">
            <FaClock className="text-sky-500" />
            {tour.duration}
          </p>

          <p className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            {tour.rating}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-sky-600">${tour.price}</span>

          <Link
            to={`/tour/${tour.id}`}
            className="rounded-lg bg-sky-500 px-5 py-2 text-white transition hover:bg-sky-600"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
