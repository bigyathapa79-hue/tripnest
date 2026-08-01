import { motion } from "framer-motion";

import statistics from "../../data/statistics";
import StatCard from "./StatCard";

const Statistics = () => {
  return (
    <section className="bg-linear-to-br from-sky-600 to-cyan-600 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-white/80">
            Our Achievements
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Trusted by Thousands of Travelers
          </h2>

          <p className="mt-5 text-lg text-white/80">
            Every journey begins with trust. Here's what we've achieved
            together.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
