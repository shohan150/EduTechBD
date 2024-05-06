import { Fragment, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CommonHeading from "../../../AllSharedComponents/CommonHeading";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const { axiosPublic } = useAxiosPublic();

  //   data fetching from api
  useEffect(() => {
    axiosPublic
      .get("/instructors.json")
      .then((res) => setInstructors(res.data));
  }, []);
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          {/* heading */}
          <CommonHeading heading="Expert Instructors" subheading="Instructors"/>
          
          <div className="row g-4">
            {/* instructors items */}
            {instructors?.map((instructor) => (
              <Fragment key={instructor.name}>
                <div
                  className="col-lg-3 col-md-6 animate__animated animate__fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item bg-light">
                    <div className="overflow-hidden">
                      <img
                        className="img-fluid"
                        src={`/images/${instructor.profile_picture}`}
                        alt=""
                      />
                    </div>
                    <div
                      className="position-relative d-flex justify-content-center"
                      style={{ marginTop: "-23px" }}
                    >
                      <div className="bg-light d-flex justify-content-center pt-2 px-1">
                        <a
                          className="btn btn-sm-square btn-primary mx-1"
                          href={instructor.facebook_url}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          className="btn btn-sm-square btn-primary mx-1"
                          href={instructor.twitter_url}
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          className="btn btn-sm-square btn-primary mx-1"
                          href={instructor.instagram_url}
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                    <div className="text-center p-4">
                      <h5 className="mb-0">{instructor.name}</h5>
                      <small>{instructor.designation}</small>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructors;
