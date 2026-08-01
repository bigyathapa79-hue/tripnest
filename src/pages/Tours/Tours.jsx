import PageBanner from "../../components/common/PageBanner";
import TourGrid from "../../components/tours/TourGrid";
import tours from "../../data/tours";


const Tours = () => {
  return (
    <>
      <PageBanner
        title="Our Tours"
        background="/images/banners/tour-banner.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Explore Our Tour Packages
            </h2>

            <p className="mt-4 text-slate-500">
              Choose from our carefully selected travel experiences across
              Nepal.
            </p>
          </div>

          <TourGrid tours={tours} />
        </div>
      </section>
    </>
  );
};

export default Tours;
