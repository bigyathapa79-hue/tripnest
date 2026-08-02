import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

import FlightSearch from "./FlightSearch";
import HotelSearch from "./HotelSearch";
import TourSearch from "./TourSearch";

const tabs = [
  {
    id: "flights",
    label: "Flights",
    icon: <FaPlaneDeparture />,
  },
  {
    id: "hotels",
    label: "Hotels",
    icon: <FaHotel />,
  },
  {
    id: "tours",
    label: "Tours",
    icon: <FaMapMarkedAlt />,
  },
];

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.7 }}
      className="
    relative mt-8
    lg:absolute lg:-bottom-24
    left-1/2
    z-30
    w-full
    max-w-7xl
    lg:-translate-x-1/2
    px-4
  "
    >
      <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/15 shadow-2xl backdrop-blur-xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center border-b border-white/20 bg-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-5 text-sm font-semibold transition-all duration-300 md:px-10 ${
                activeTab === tab.id
                  ? "bg-sky-500 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>

              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Area */}

        <div className="bg-white p-6 md:p-8">
          {activeTab === "flights" && <FlightSearch />}

          {activeTab === "hotels" && <HotelSearch />}

          {activeTab === "tours" && <TourSearch />}
        </div>
      </div>
    </motion.div>
  );
};

export default SearchTabs;
