import HeroContent from "./HeroContent";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pb-44">
      <HeroSlider />

      <HeroContent />

    </section>
  );
};

export default Hero;
