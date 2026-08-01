import { motion } from "framer-motion";

const FeatureCard = ({ feature }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
    >
      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-3xl text-sky-500 transition group-hover:bg-sky-500 group-hover:text-white">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>

      {/* Description */}
      <p className="leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
