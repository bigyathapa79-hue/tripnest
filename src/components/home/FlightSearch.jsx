import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";

const FlightSearch = () => {
  return (
    <form className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-6">
      {/* From */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          From
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaPlaneDeparture className="mr-3 text-sky-500" />

          <input
            type="text"
            placeholder="Kathmandu"
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* To */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          To
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaPlaneArrival className="mr-3 text-sky-500" />

          <input
            type="text"
            placeholder="Pokhara"
            className="w-full outline-none"
          />
        </div>
      </div>

      {/* Departure */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Departure
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaCalendarAlt className="mr-3 text-sky-500" />

          <input type="date" className="w-full outline-none" />
        </div>
      </div>

      {/* Return */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Return
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaCalendarAlt className="mr-3 text-sky-500" />

          <input type="date" className="w-full outline-none" />
        </div>
      </div>

      {/* Passengers */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Passengers
        </label>

        <div className="flex h-14 items-center rounded-xl border border-slate-200 bg-white px-4 focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
          <FaUserFriends className="mr-3 text-sky-500" />

          <select className="w-full bg-transparent outline-none">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
            <option>5+ Adults</option>
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
          Search
        </button>
      </div>
    </form>
  );
};

export default FlightSearch;
