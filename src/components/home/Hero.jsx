import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";
import SearchTabs from "./SearchTabs";

const Hero = () => {
  return (
    <section className="relative pb-16 lg:pb-44">
      <HeroSlider />

      <HeroContent />
      <SearchTabs />
    </section>
  );
};

export default Hero;
