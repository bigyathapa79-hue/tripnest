import { FaMapMarkerAlt, FaClock, FaStar, FaDollarSign } from "react-icons/fa";

const DestinationContent = ({ destination }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-bold text-slate-800">
              About {destination.name}
            </h2>

            <p className="mb-6 leading-8 text-slate-600">
              {destination.description}
            </p>

            <p className="leading-8 text-slate-600">
              Discover breathtaking landscapes, rich culture, delicious local
              cuisine, and unforgettable experiences. Whether you're looking for
              adventure, relaxation, or cultural exploration,
              {` ${destination.name}`} offers something for every traveler.
            </p>
          </div>

          {/* Right Info Card */}
          <div className="rounded-3xl bg-sky-50 p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold">Trip Information</h3>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-sky-500" />
                  Location
                </span>

                <span>{destination.location}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaClock className="text-sky-500" />
                  Duration
                </span>

                <span>{destination.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  Rating
                </span>

                <span>{destination.rating}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FaDollarSign className="text-green-500" />
                  Price
                </span>

                <span>${destination.price}</span>
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-sky-500 py-4 font-semibold text-white transition hover:bg-sky-600">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationContent;
