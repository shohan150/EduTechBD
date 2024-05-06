import galleryImg from "../../assets/img/cat-3.jpg";
export default function Gallery() {
  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div
          className="text-center wow animate__fadeInUp"
          data-wow-delay="0.1s"
        >
          <h6 className="section-title bg-white text-center text-primary px-3">
            Galleries
          </h6>
          <h1 className="mb-5">School Galleries </h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img
                className="img-fluid fixed-height-image"
                src={galleryImg}
                alt=""
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: "1px" }}
              >
                <h5 className="m-0">gallery title </h5>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img
                className="img-fluid fixed-height-image"
                src={galleryImg}
                alt=""
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: "1px" }}
              >
                <h5 className="m-0">gallery title </h5>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img
                className="img-fluid fixed-height-image"
                src={galleryImg}
                alt=""
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: "1px" }}
              >
                <h5 className="m-0">gallery title </h5>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
            <a className="position-relative d-block overflow-hidden" href="">
              <img
                className="img-fluid fixed-height-image"
                src={galleryImg}
                alt=""
              />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: "1px" }}
              >
                <h5 className="m-0">gallery title </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
