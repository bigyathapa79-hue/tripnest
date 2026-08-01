import PageBanner from "../../components/common/PageBanner";

const About = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        background="/images/banners/about-banner.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div>
              <img
                src="/images/logo/logo.png"
                alt="About TripNest"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
              <span className="font-semibold uppercase tracking-wider text-sky-500">
                About TripNest
              </span>

              <h2 className="mt-3 text-4xl font-bold text-slate-800">
                Discover Nepal With Confidence
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                TripNest is a trusted travel platform that helps travelers
                explore Nepal with ease. We offer domestic flight booking, hotel
                reservations, tour packages, and destination guides to make
                every journey simple and memorable.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Whether you're planning a weekend getaway or an adventure in the
                Himalayas, TripNest is here to help you travel smarter and
                create unforgettable experiences.
              </p>

              <button className="mt-8 rounded-xl bg-sky-500 px-8 py-3 font-semibold text-white transition hover:bg-sky-600">
                Explore Tours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-800">
              Why Choose TripNest?
            </h2>

            <p className="mt-4 text-slate-600">
              We make travel easy, reliable, and enjoyable.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Best Prices</h3>

              <p className="text-slate-600">
                Affordable flights, hotels, and tour packages.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Trusted Service</h3>

              <p className="text-slate-600">
                Reliable booking with secure and easy payments.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Top Destinations</h3>

              <p className="text-slate-600">
                Explore Nepal's most popular travel destinations.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 text-center shadow-md">
              <h3 className="mb-3 text-xl font-semibold">24/7 Support</h3>

              <p className="text-slate-600">
                Our team is always ready to assist your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
