import { Link, NavLink } from "react-router";

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
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="transition duration-300 hover:scale-105">
          <img
            src="/images/logo/logo.png"
            alt="TripNest"
            className="h-30 w-auto lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.path} className="group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative block py-2 text-[15px] font-medium transition-all duration-300 ${
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

        {/* Book Now Button */}
        <Link
          to="/booking"
          className="hidden rounded-lg bg-sky-500 px-6 py-3 font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-xl lg:inline-flex"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
