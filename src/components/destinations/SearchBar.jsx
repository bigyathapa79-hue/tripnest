import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative flex-1">
      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-14 w-full rounded-xl border border-slate-200 pl-14 pr-4 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
      />
    </div>
  );
};

export default SearchBar;
