import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../assets/css/box.css";
import "./home.css";

import About from "./About";
import Details from "./Details";
import Gallery from "./Gallery";
import HeroSection from "./HeroSection";
import History from "./History";
import Notice from "./Notice";
import Services from "./Services";
import Testimonial from "./Testimonial";
// import "../../assets/lib/wow/wow.min.js";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Notice />
      <About />
      <Gallery />
      <Testimonial />
      <History />
      <Details />
    </>
  );
};

export default Home;
