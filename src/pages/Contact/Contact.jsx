import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import PageBanner from "../../components/common/PageBanner";

const Contact = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        background="/images/banners/contact-banner.jpg"
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-800">
                Get In Touch
              </h2>

              <p className="mb-10 leading-8 text-slate-600">
                We'd love to hear from you. Whether you have questions about
                flights, hotels, tours, or bookings, our team is always ready to
                help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-5 shadow-sm">
                  <FaMapMarkerAlt className="mt-1 text-2xl text-sky-500" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-slate-600">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-5 shadow-sm">
                  <FaPhoneAlt className="mt-1 text-2xl text-sky-500" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-slate-600">+977 9812345678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-5 shadow-sm">
                  <FaEnvelope className="mt-1 text-2xl text-sky-500" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-slate-600">info@tripnest.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-5 shadow-sm">
                  <FaClock className="mt-1 text-2xl text-sky-500" />
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-slate-600">
                      Sun - Fri : 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-3xl font-bold">Send Message</h3>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-sky-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="TripNest Location"
              src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
