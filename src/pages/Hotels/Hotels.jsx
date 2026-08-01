import PageBanner from "../../components/common/PageBanner";
import HotelGrid from "../../components/hotels/HotelGrid";
import hotels from "../../data/hotels";

const Hotels = () => {
  return (
    <>
      <PageBanner
        title="Hotels"
        background="/images/banners/hotel-banner.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Recommended Hotels
            </h2>

            <p className="mt-4 text-slate-500">
              Stay in comfortable hotels during your journey across Nepal.
            </p>
          </div>

          <HotelGrid hotels={hotels} />
        </div>
      </section>
    </>
  );
};

export default Hotels;
