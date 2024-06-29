import PageBanner from "../../AllSharedComponents/PageBanner";
import AboutUs from "./About/AboutUs";
import Services from "./About/Services";
import Instructors from "./About/Instructors";

import './about.css'

const About = () => {
    return (
        <>
            <PageBanner />
            <Services />
            <AboutUs />
            <Instructors />
        </>
    );
};

export default About;