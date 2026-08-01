import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top Footer */}
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <img src="/images/logo/logo.png" alt="TripNest" className="mb-6 h-12" />

            <p className="leading-7 text-slate-400">
              Discover amazing destinations, book unforgettable tours, hotels
              and flights with TripNest.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-sky-500 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-sky-500 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-sky-500 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition hover:bg-sky-500 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/destinations">Destinations</Link>
              </li>

              <li>
                <Link to="/tours">Tours</Link>
              </li>

              <li>
                <Link to="/flights">Flights</Link>
              </li>

              <li>
                <Link to="/hotels">Hotels</Link>
              </li>
            </ul>
          </div>

          {/* Support */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Support</h3>

            <ul className="space-y-3">
              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/booking">Booking</Link>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Contact</h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-sky-500" />
                <span>Kathmandu, Nepal</span>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-sky-500" />
                <span>+977 98XXXXXXXX</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-sky-500" />
                <span>info@tripnest.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-800">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} TripNest. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#">Privacy</a>

            <a href="#">Terms</a>

            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
