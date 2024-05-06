import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import About from "../pages/About/About";
import ClassRoutine from "../pages/ClassRoutine/ClassRoutine";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import InstituteDetails from "../pages/InstituteDetails/InstituteDetails";
import PictureGallery from "../pages/PictureGallery/PictureGallery";
import Root from "../pages/Root/Root";
import Staffs from "../pages/Staffs/Staffs";
import StudentAttendance from "../pages/StudentAttendance/StudentAttendance";
import StudentList from "../pages/StudentList/StudentList";
import Teachers from "../pages/Teachers/Teachers";
import TeachersRoutine from "../pages/TeachersRoutine/TeachersRoutine";
import VideoGallery from "../pages/VideoGallery/VideoGallery";

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
            <Route path="/student-attendance" element={<StudentAttendance />} />
            <Route path="/student-list" element={<StudentList />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
