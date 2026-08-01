import { FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="relative overflow-hidden bg-sky-600 py-20">
      <div className="absolute inset-0 bg-[url('/images/world-map.png')] bg-cover bg-center opacity-10"></div>

      <div className="container relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white">
            Get Exclusive Travel Deals
          </h2>

          <p className="mt-4 text-lg text-sky-100">
            Subscribe to receive travel offers, flight discounts and tour
            packages directly in your inbox.
          </p>

          <form className="mt-10 flex flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full px-6 outline-none"
            />

            <button className="flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 font-semibold text-sky-600 transition hover:bg-slate-100">
              <FaPaperPlane />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
