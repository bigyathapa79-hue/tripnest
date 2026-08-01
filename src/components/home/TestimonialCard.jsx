import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { name, country, image, rating, review } = testimonial;

  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      {/* Quote */}
      <FaQuoteLeft className="mb-5 text-4xl text-sky-500" />

      {/* Rating */}
      <div className="mb-5 flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
      </div>

      {/* Review */}
      <p className="mb-8 leading-8 text-slate-600">"{review}"</p>

      {/* User */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover"
        />

        <div>
          <h4 className="font-bold text-lg">{name}</h4>

          <p className="text-slate-500">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
