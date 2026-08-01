import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const PageBanner = ({
  title,
  background = "/images/banners/page-banner.jpg",
}) => {
  return (
    <section
      className="relative flex h-87.5 items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>

        <div className="flex items-center justify-center gap-3 text-lg">
          <Link to="/" className="hover:text-sky-400 transition">
            Home
          </Link>

          <FaChevronRight className="text-sm" />

          <span className="text-sky-400">{title}</span>
        </div>
      </motion.div>
    </section>
  );
};

export default PageBanner;
