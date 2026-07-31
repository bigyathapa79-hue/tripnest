import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaBed,
  FaSearch,
} from "react-icons/fa";

const HotelSearch = () => {
  return (
    <form className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
      {/* Destination */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Destination
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaMapMarkerAlt className="mr-3 text-sky-500" />

          <input
            type="text"
            placeholder="Pokhara"
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Check In */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Check In
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaCalendarAlt className="mr-3 text-sky-500" />

          <input type="date" className="w-full outline-none" />
        </div>
      </div>

      {/* Check Out */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Check Out
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaCalendarAlt className="mr-3 text-sky-500" />

          <input type="date" className="w-full outline-none" />
        </div>
      </div>

      {/* Guests */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Guests
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaUsers className="mr-3 text-sky-500" />

          <select className="w-full bg-transparent outline-none">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>
        </div>
      </div>

      {/* Rooms */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Rooms
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaBed className="mr-3 text-sky-500" />

          <select className="w-full bg-transparent outline-none">
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
            <option>4 Rooms</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex items-end">
        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-sky-500 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:shadow-lg"
        >
          <FaSearch />
          Search Hotels
        </button>
      </div>
    </form>
  );
};

export default HotelSearch;
