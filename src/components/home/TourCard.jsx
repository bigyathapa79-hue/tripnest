import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

const TourCard = ({ tour }) => {
  const {
    slug,
    title,
    destination,
    image,
    duration,
    groupSize,
    rating,
    reviews,
    price,
    oldPrice,
    discount,
  } = tour;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

        {/* Discount */}
        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {discount}
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow transition hover:bg-red-500 hover:text-white">
          <FaHeart />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{rating}</span>
            <span className="text-sm text-slate-500">({reviews} reviews)</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-slate-900 transition group-hover:text-sky-600">
          {title}
        </h3>

        {/* Location */}
        <div className="mb-3 flex items-center gap-2 text-slate-600">
          <FaMapMarkerAlt className="text-sky-500" />
          {destination}
        </div>

        {/* Tour Info */}
        <div className="mb-5 flex items-center justify-between text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <FaClock className="text-sky-500" />
            {duration}
          </div>

          <div className="flex items-center gap-2">
            <FaUsers className="text-sky-500" />
            {groupSize}
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-sm text-slate-400 line-through">${oldPrice}</p>

            <h4 className="text-2xl font-bold text-sky-600">${price}</h4>
          </div>

          <Link
            to={`/tour/${slug}`}
            className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
