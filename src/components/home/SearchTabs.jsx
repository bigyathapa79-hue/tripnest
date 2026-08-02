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
    lg:absolute lg:-bottom-28
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
        <div className="flex overflow-x-auto rounded-t-3xl bg-slate-900/80">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex min-w-30 flex-1 items-center justify-center gap-2 px-5 py-4 text-sm font-semibold transition-all duration-300
        ${
          activeTab === tab.id
            ? "bg-sky-500 text-white"
            : "bg-slate-800 text-white hover:bg-slate-700"
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
