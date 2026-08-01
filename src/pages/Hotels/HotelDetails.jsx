import { useParams } from "react-router";
import { FaMapMarkerAlt, FaStar, FaCheckCircle } from "react-icons/fa";

import hotels from "../../data/hotels";

const HotelDetails = () => {
  const { id } = useParams();

  const hotel = hotels.find((item) => item.id === Number(id));

  if (!hotel) {
    return (
      <div className="container mx-auto py-40 text-center">Hotel Not Found</div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="h-112.5 w-full rounded-3xl object-cover shadow-lg"
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-5xl font-bold">{hotel.name}</h1>

            <div className="mt-5 flex flex-wrap gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sky-500" />
                {hotel.location}
              </div>

              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                {hotel.rating} ({hotel.reviews} Reviews)
              </div>
            </div>

            <h2 className="mt-10 text-2xl font-bold">Amenities</h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {hotel.amenities.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2"
                >
                  <FaCheckCircle className="text-sky-500" />
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-10 leading-8 text-slate-600">
              Experience premium hospitality with comfortable rooms, modern
              facilities, and excellent service during your stay.
            </p>
          </div>

          <div className="rounded-3xl bg-sky-500 p-8 text-white shadow-xl">
            <h3 className="text-3xl font-bold">${hotel.price}</h3>

            <p className="mb-8">per night</p>

            <button className="w-full rounded-xl bg-white py-4 font-bold text-sky-600 transition hover:bg-slate-100">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelDetails;
