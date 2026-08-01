import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const HeroContent = () => {
  return (
    <div className="absolute inset-0 z-20 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-lg font-medium uppercase tracking-widest text-sky-400"
          >
            Explore • Discover • Belong
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Discover Nepal's
            <span className="block text-sky-400">Hidden Wonders</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-200"
          >
            Book flights, hotels, and unforgettable travel experiences with
            TripNest. Your next adventure starts here.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/tours"
              className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
            >
              Explore Tours
            </Link>

            <Link
              to="/destinations"
              className="group inline-flex items-center gap-3 rounded-full bg-sky-500 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-sky-600 hover:text-slate-900"
            >
              View Destinations
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
