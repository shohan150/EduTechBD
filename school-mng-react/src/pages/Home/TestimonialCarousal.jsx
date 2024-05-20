import Slider from "react-slick";
import testimonialImg from "../../assets/img/testimonial-2.jpg";

export default function TestimonialCarousal() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="position-relative">
      <Slider {...settings}>
        <div className="text-center px-1">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src={testimonialImg}
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="mb-0">testimonial name</h5>
          <p>testimonial profession </p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">testimonial text</p>
          </div>
        </div>
        <div className="text-center px-1">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src={testimonialImg}
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="mb-0">testimonial name</h5>
          <p>testimonial profession </p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">testimonial text</p>
          </div>
        </div>
        <div className="text-center px-1">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src={testimonialImg}
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="mb-0">testimonial name</h5>
          <p>testimonial profession </p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">testimonial text</p>
          </div>
        </div>
        <div className="text-center px-1">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src={testimonialImg}
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="mb-0">testimonial name</h5>
          <p>testimonial profession </p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">testimonial text</p>
          </div>
        </div>
        <div className="text-center px-1">
          <img
            className="border rounded-circle p-2 mx-auto mb-3"
            src={testimonialImg}
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="mb-0">testimonial name</h5>
          <p>testimonial profession </p>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">testimonial text</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
