import Slider from "react-slick";

export default function NoticeCarousal() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
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
        <div className="text-center px-3">
          <h5 className="mb-0">notice title </h5>
          <p className="text-info mb-0">Expire: dummy date </p>
          <a
            className="text-info pb-1"
            style={{ textDecoration: "none" }}
            href="/media/{{ notice.file_attached }}"
            download
          >
            Download
          </a>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">notice description</p>
          </div>
        </div>
        <div className="text-center px-3">
          <h5 className="mb-0">notice title </h5>
          <p className="text-info mb-0">Expire: dummy date </p>
          <a
            className="text-info pb-1"
            style={{ textDecoration: "none" }}
            href="/media/{{ notice.file_attached }}"
            download
          >
            Download
          </a>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">notice description</p>
          </div>
        </div>
        <div className="text-center px-3">
          <h5 className="mb-0">notice title </h5>
          <p className="text-info mb-0">Expire: dummy date </p>
          <a
            className="text-info pb-1"
            style={{ textDecoration: "none" }}
            href="/media/{{ notice.file_attached }}"
            download
          >
            Download
          </a>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">notice description</p>
          </div>
        </div>
        <div className="text-center px-3">
          <h5 className="mb-0">notice title </h5>
          <p className="text-info mb-0">Expire: dummy date </p>
          <a
            className="text-info pb-1"
            style={{ textDecoration: "none" }}
            href="/media/{{ notice.file_attached }}"
            download
          >
            Download
          </a>
          <div className="testimonial-text bg-light text-center p-4">
            <p className="mb-0">notice description</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
