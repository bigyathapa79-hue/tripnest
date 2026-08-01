import SearchBar from "./SearchBar";

const DestinationFilter = ({
  search,
  setSearch,
  region,
  setRegion,
  sort,
  setSort,
  total,
}) => {
  return (
    <div className="mb-12 rounded-2xl bg-white p-6 shadow-lg">
      <div className="grid gap-5 lg:grid-cols-4">
        <SearchBar search={search} setSearch={setSearch} />

        {/* Region */}

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-sky-500"
        >
          <option value="all">All Regions</option>
          <option value="Mountain">Mountain</option>
          <option value="Hill">Hill</option>
          <option value="Terai">Terai</option>
        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-14 rounded-xl border border-slate-200 px-4 outline-none focus:border-sky-500"
        >
          <option value="">Sort By</option>

          <option value="price-low">Price: Low to High</option>

          <option value="price-high">Price: High to Low</option>

          <option value="rating">Highest Rating</option>
        </select>

        <div className="flex items-center justify-center rounded-xl bg-sky-500 text-lg font-semibold text-white">
          {total} Destinations
        </div>
      </div>
    </div>
  );
};

export default DestinationFilter;
