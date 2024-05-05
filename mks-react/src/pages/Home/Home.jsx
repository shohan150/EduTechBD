import "../../assets/css/box.css";
import HeroSection from "./HeroSection";
import "./home.css";

import About from "./About";
import Details from "./Details";
import Gallery from "./Gallery";
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
