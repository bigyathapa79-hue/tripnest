import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";

const DestinationGrid = ({ destinations }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
    >
      {destinations.map((destination) => (
        <motion.div
          key={destination.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.5 }}
        >
          <DestinationCard destination={destination} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DestinationGrid;
