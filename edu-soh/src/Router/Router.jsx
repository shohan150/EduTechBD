import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/404/NotFound";
import About from "../pages/About/About";
import ClassRoutine from "../pages/ClassRoutine/ClassRoutine";
import InstituteDetails from "../pages/InstituteDetails/InstituteDetails";
import PictureGallery from "../pages/PictureGallery/PictureGallery";
import Staffs from "../pages/Staffs/Staffs";
import Teachers from "../pages/Teachers/Teachers";
import TeachersRoutine from "../pages/TeachersRoutine/TeachersRoutine";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/class-routine" element={<ClassRoutine />} />
            <Route path="/institute-details" element={<InstituteDetails />} />
            <Route path="/picture-gallery" element={<PictureGallery />} />
            <Route path="/staffs" element={<Staffs />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/teachers-routine" element={<TeachersRoutine />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
