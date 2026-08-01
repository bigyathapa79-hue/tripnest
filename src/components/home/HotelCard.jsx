import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  const { slug, name, image, location, rating, reviews, price, amenities } =
    hotel;

  const amenityIcons = {
    "Free WiFi": <FaWifi />,
    Breakfast: <FaUtensils />,
    Restaurant: <FaUtensils />,
    Pool: <FaSwimmingPool />,
    Spa: <FaSwimmingPool />,
    Parking: <FaMapMarkerAlt />,
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-red-500 hover:text-white transition">
          <FaHeart />
        </button>

        <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-sm font-semibold flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>

        <div className="mt-2 flex items-center gap-2 text-slate-500">
          <FaMapMarkerAlt className="text-sky-500" />
          {location}
        </div>

        <p className="mt-2 text-sm text-slate-500">{reviews} Reviews</p>

        <div className="mt-5 space-y-2">
          {amenities.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <span className="text-sky-500">{amenityIcons[item]}</span>

              {item}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-sm text-slate-500">Per Night</p>

            <h4 className="text-2xl font-bold text-sky-600">${price}</h4>
          </div>

          <Link
            to={`/hotel/${slug}`}
            className="rounded-full bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default HotelCard;
