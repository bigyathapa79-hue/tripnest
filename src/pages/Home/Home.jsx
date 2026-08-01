import FeaturedHotels from "../../components/home/FeaturedHotels";
import FeaturedTours from "../../components/home/FeaturedTours";
import FlightDeals from "../../components/home/FlightDeals";
import Hero from "../../components/home/Hero";
import Newsletter from "../../components/home/Newsletter";
import PopularDestinations from "../../components/home/PopularDestinations";
import Statistics from "../../components/home/Statistics";
import Testimonials from "../../components/home/Testimonials";
import WhyChooseUs from "../../components/home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <FeaturedTours />
      <WhyChooseUs />
      <FeaturedHotels/>
      <FlightDeals/>
      <Statistics/>
      <Testimonials/>
      <Newsletter/>

    </>
  );
};

export default Home;
