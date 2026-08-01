import PageBanner from "../../components/common/PageBanner";
import SEO from "../../components/common/SEO";
import FlightGrid from "../../components/flights/FlightGrid";
import flights from "../../data/flights";

const Flights = () => {
  return (
    <>
      <SEO
        title="TripNest | Explore Nepal"
        description="Discover Nepal's best destinations, hotels, tours and flights with TripNest."
        keywords="Nepal Travel, Pokhara, Everest, Tours, Hotels, Flights"
      />

      <PageBanner
        title="Flights"
        background="/images/banners/flight-banners.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Available Flights
            </h2>

            <p className="mt-4 text-slate-500">
              Find domestic flights across Nepal with trusted airlines.
            </p>
          </div>

          <FlightGrid flights={flights} />
        </div>
      </section>
    </>
  );
};

export default Flights;
