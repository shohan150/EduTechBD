import { Fragment, useEffect, useState } from "react";
import CommonHeading from "../../AllSharedComponents/CommonHeading";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const PictureGallery = () => {
  const [pictures, setPictures] = useState([]);
  const { axiosPublic } = useAxiosPublic();

  //   data fetching from api
  useEffect(() => {
    axiosPublic.get("/pictures.json").then((res) => setPictures(res.data));
  }, []);
  return (
    <>
      <div className="container-xxl py-5 category">
        <div className="">
          {/* heading */}
          <CommonHeading
            heading="School Photo Gallery"
            subheading="Photo Gallery"
          />

          {/* pictures are here */}
          <div className="row g-3">
            {pictures?.map((item) => (
              <Fragment key={item.title}>
                <div
                  className="col-lg-6 col-md-12 animate__animated animate__zoomin"
                  data-wow-delay="0.5s"
                >
                  <a
                    className="position-relative d-block overflow-hidden"
                    href=""
                  >
                    <img
                      className="img-fluid fixed-height-image"
                      src={`/images/${item.image}`}
                      alt=""
                    />
                    <div
                      className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                      style={{margin: "1px"}}
                    >
                      <h5 className="m-0">{item.title}</h5>
                    </div>
                  </a>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PictureGallery;
