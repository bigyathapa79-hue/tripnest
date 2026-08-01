import { motion } from "framer-motion";

const StatCard = ({ stat }) => {
  const { icon: Icon, value, title } = stat;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:shadow-2xl"
    >
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sky-100 text-4xl text-sky-500">
        <Icon />
      </div>

      <h3 className="text-5xl font-extrabold text-sky-600">{value}</h3>

      <p className="mt-3 text-lg font-medium text-slate-600">{title}</p>
    </motion.div>
  );
};

export default StatCard;
