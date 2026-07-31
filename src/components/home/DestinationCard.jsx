import { Link } from "react-router";
import { FaMapMarkerAlt, FaStar, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const DestinationCard = ({ destination }) => {
  const { slug, name, country, image, tours, rating } = destination;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
          <FaStar className="text-yellow-400" />
          {rating}
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <div className="mb-2 flex items-center gap-2 text-sm">
            <FaMapMarkerAlt />
            <span>{country}</span>
          </div>

          <h3 className="text-2xl font-bold">{name}</h3>

          <p className="mt-2 text-sm text-gray-200">{tours} Tour Packages</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-5">
        <span className="font-medium text-slate-700">Explore Destination</span>

        <Link
          to={`/destination/${slug}`}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500 text-white transition duration-300 hover:bg-sky-600"
        >
          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
