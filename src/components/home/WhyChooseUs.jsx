import { motion } from "framer-motion";

import features from "../../data/features";
import FeatureCard from "./FeatureCard";

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="font-semibold uppercase tracking-[4px] text-sky-500">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Travel Smarter with TripNest
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            We provide reliable travel services, affordable prices, and
            unforgettable experiences for every traveler.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
