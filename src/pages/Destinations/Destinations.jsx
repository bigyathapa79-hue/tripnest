import { useEffect, useMemo, useState } from "react";
import { Pagination } from "swiper/modules";
import PageBanner from "../../components/common/PageBanner";
import DestinationFilter from "../../components/destinations/DestinationFilter";
import DestinationGrid from "../../components/destinations/DestinationGrid";
import destinations from "../../data/destinations";
import SEO from "../../components/common/SEO";



const Destinations = () => {
  // Search
  const [search, setSearch] = useState("");

  // Filter
  const [region, setRegion] = useState("all");

  // Sort
  const [sort, setSort] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Filter + Search + Sort
  const filteredDestinations = useMemo(() => {
    let result = [...destinations];

    // Search
    if (search.trim()) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Region
    if (region !== "all") {
      result = result.filter((item) => item.region === region);
    }

    // Sort
    switch (sort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return result;
  }, [search, region, sort]);

  // Reset page when filters change
  useEffect(() => {
  }, [search, region, sort]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredDestinations.length / itemsPerPage),
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <>
      <SEO
        title="TripNest | Explore Nepal"
        description="Discover Nepal's best destinations, hotels, tours and flights with TripNest."
        keywords="Nepal Travel, Pokhara, Everest, Tours, Hotels, Flights"
      />

      <PageBanner
        title="Destinations"
        background="/images/banners/page-banner.jpg"
      />

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <DestinationFilter
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
            sort={sort}
            setSort={setSort}
            total={filteredDestinations.length}
          />

          {filteredDestinations.length > 0 ? (
            <>
              <DestinationGrid destinations={currentDestinations} />

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </>
          ) : (
            <div className="rounded-2xl bg-white p-16 text-center shadow">
              <h2 className="text-3xl font-bold text-slate-700">
                No Destinations Found
              </h2>

              <p className="mt-4 text-slate-500">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Destinations;
