import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

const DestinationCard = ({ destination }) => {
  const { slug, name, image, location, duration, rating, price } = destination;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-700 transition hover:bg-red-500 hover:text-white">
          <FaHeart />
        </button>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold">
          <FaStar className="text-yellow-400" />
          {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800">{name}</h3>

        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <FaMapMarkerAlt className="text-sky-500" />
          <span>{location}</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-slate-500">
          <FaClock className="text-sky-500" />
          <span>{duration}</span>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 line-clamp-3">
          {destination.description}
        </p>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-sm text-slate-500">Starting From</p>

            <h4 className="text-2xl font-bold text-sky-600">${price}</h4>
          </div>

          <Link
            to={`/destination/${destination.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            View
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
