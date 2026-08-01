import { useForm } from "react-hook-form";
import PageBanner from "../../components/common/PageBanner";
import SEO from "../../components/common/SEO";

const Booking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    alert("Booking Confirmed!");

    reset();
  };

  return (
    <>
      <SEO
        title="TripNest | Explore Nepal"
        description="Discover Nepal's best destinations, hotels, tours and flights with TripNest."
        keywords="Nepal Travel, Pokhara, Everest, Tours, Hotels, Flights"
      />

      <PageBanner
        title="Book Your Trip"
        background="/images/banners/booking-banner.jpg"
      />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Booking Form */}
            <div className="lg:col-span-2 rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-8 text-3xl font-bold">Booking Information</h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium">Full Name</label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name", {
                        required: "Name is required",
                      })}
                      className="w-full rounded-xl border px-4 py-3 outline-none focus:border-sky-500"
                    />

                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block font-medium">Email</label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", {
                        required: "Email is required",
                      })}
                      className="w-full rounded-xl border px-4 py-3 outline-none focus:border-sky-500"
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-medium">Phone</label>

                    <input
                      type="tel"
                      placeholder="+977 98XXXXXXXX"
                      {...register("phone", {
                        required: "Phone is required",
                      })}
                      className="w-full rounded-xl border px-4 py-3 outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium">
                      Destination
                    </label>

                    <input
                      type="text"
                      placeholder="Pokhara"
                      {...register("destination", {
                        required: "Destination is required",
                      })}
                      className="w-full rounded-xl border px-4 py-3 outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block font-medium">Check In</label>

                    <input
                      type="date"
                      {...register("checkin", {
                        required: true,
                      })}
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium">Check Out</label>

                    <input
                      type="date"
                      {...register("checkout", {
                        required: true,
                      })}
                      className="w-full rounded-xl border px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium">Travelers</label>

                    <select
                      {...register("travelers")}
                      className="w-full rounded-xl border px-4 py-3"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Special Requests
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write any special request..."
                    {...register("message")}
                    className="w-full rounded-xl border px-4 py-3"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 py-4 font-semibold text-white transition hover:bg-sky-600"
                >
                  Confirm Booking
                </button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="rounded-2xl bg-sky-500 p-8 text-white shadow-lg">
              <h2 className="mb-6 text-3xl font-bold">Trip Summary</h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span>Destination</span>
                  <span>Pokhara</span>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <span>3 Days</span>
                </div>

                <div className="flex justify-between">
                  <span>Travelers</span>
                  <span>2</span>
                </div>

                <div className="border-t border-white/30 pt-5">
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span>$450</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
