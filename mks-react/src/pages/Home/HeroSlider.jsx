import Slider from "react-slick";

import sliderImg1 from "../../assets/img/course-2.jpg";

export default function HeroSlider() {
  function PrevButton(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "40px",
        }}
        onClick={onClick}
        className="slider-btn-hover"
      >
        {/* slider-btn-hover class code is in home.css */}
        <i
          className="fa fa-angle-right"
          style={{ color: "white", fontSize: "35px" }}
        ></i>
      </div>
    );
  }

  function NextButton(props) {
    const { onClick } = props;
    return (
      <div
        style={{
          position: "absolute",
          top: "calc(40% + 70px)",
          right: "40px",
        }}
        onClick={onClick}
        className="slider-btn-hover"
      >
        <i
          className="fa fa-angle-left"
          style={{ color: "white", fontSize: "35px" }}
        ></i>
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="position-relative">
          <img
            className="img-fluid rounded-3"
            src={sliderImg1}
            alt=""
            style={{ width: "100%" }}
          />
          <div
            className="position-absolute top-0  rounded-3 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(24, 29, 56, 0.1)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                    banner sub heading
                  </h5>

                  <h1 className="display-4 text-white animated slideInDown">
                    banner display heading
                  </h1>

                  <p className="fs-5 text-white mb-4 pb-2">banner text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <img
            className="img-fluid rounded-3"
            src={sliderImg1}
            alt=""
            style={{ width: "100%" }}
          />
          <div
            className="position-absolute top-0  rounded-3 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(24, 29, 56, 0.1)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-sm-10 col-lg-8">
                  <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                    banner sub heading
                  </h5>

                  <h1 className="display-4 text-white animated slideInDown">
                    banner display heading
                  </h1>

                  <p className="fs-5 text-white mb-4 pb-2">banner text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
