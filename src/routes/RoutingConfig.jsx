import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import Destinations from "../pages/Destinations/Destinations";
import DestinationDetails from "../pages/Destinations/DestinationDetails";

import Tours from "../pages/Tours/Tours";
import TourDetails from "../pages/Tours/TourDetails";

import Flights from "../pages/Flights/Flights";
import FlightDetails from "../pages/Flights/FlightDetails";

import Hotels from "../pages/Hotels/Hotels";
import HotelDetails from "../pages/Hotels/HotelDetails";

import Booking from "../pages/Booking/Booking";
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

const RoutingConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Destinations */}
          <Route path="destinations" element={<Destinations />} />
          <Route path="destination/:id" element={<DestinationDetails />} />

          {/* Tours */}
          <Route path="tours" element={<Tours />} />
          <Route path="tour/:id" element={<TourDetails />} />

          {/* Flights */}
          <Route path="flights" element={<Flights />} />
          <Route path="flight/:id" element={<FlightDetails />} />

          {/* Hotels */}
          <Route path="hotels" element={<Hotels />} />
          <Route path="hotel/:id" element={<HotelDetails />} />

          {/* Other Pages */}
          <Route path="booking" element={<Booking />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingConfig;
