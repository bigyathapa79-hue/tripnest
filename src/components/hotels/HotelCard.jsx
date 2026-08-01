import { Link } from "react-router";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-64 w-full object-cover"
        />

        <span className="absolute left-4 top-4 rounded-full bg-sky-500 px-3 py-1 text-sm font-medium text-white">
          ${hotel.price}/night
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800">{hotel.name}</h3>

        <div className="mt-3 flex items-center gap-2 text-slate-600">
          <FaMapMarkerAlt className="text-sky-500" />
          <span>{hotel.location}</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <FaStar className="text-yellow-400" />

          <span className="font-semibold">{hotel.rating}</span>

          <span className="text-sm text-slate-500">
            ({hotel.reviews} reviews)
          </span>
        </div>

        {/* Amenities */}
        <div className="mt-5 flex flex-wrap gap-2">
          {hotel.amenities.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          to={`/hotel/${hotel.id}`}
          className="mt-6 inline-block w-full rounded-xl bg-sky-500 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
