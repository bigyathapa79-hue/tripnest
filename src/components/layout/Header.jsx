import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Destinations", path: "/destinations" },
  { name: "Tours", path: "/tours" },
  { name: "Flights", path: "/flights" },
  { name: "Hotels", path: "/hotels" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src="/images/logo/logo.png"
            alt="TripNest"
            className="h-12 w-auto lg:h-14"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path} className="group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative py-2 text-[15px] font-medium transition ${
                      isActive
                        ? "text-sky-500"
                        : "text-slate-700 group-hover:text-sky-500"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Button */}
        <Link
          to="/booking"
          className="hidden rounded-lg bg-sky-500 px-6 py-3 font-medium text-white shadow transition hover:bg-sky-600 lg:inline-flex"
        >
          Book Now
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-slate-700 lg:hidden"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-150" : "max-h-0"
        }`}
      >
        <nav className="border-t border-slate-100">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block border-b border-slate-100 px-6 py-4 transition ${
                      isActive
                        ? "bg-sky-50 font-semibold text-sky-500"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="p-6">
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg bg-sky-500 py-3 text-center font-semibold text-white hover:bg-sky-600"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
