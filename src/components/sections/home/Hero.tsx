import SearchBar from "@/components/SearchBar";

const HeroSection = () => {
  return (
    <section className="heroSection wow animate__animated animate__zoomIn">
      <div className="sectionWrapper heroSectionWrapper">
        <div className="container-fluid">
          <div className="hero-image-box">
            <video
              className="w-100 h-100 object-fit-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/images/hero.jpg"
            >
              <source src="/assets/images/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
