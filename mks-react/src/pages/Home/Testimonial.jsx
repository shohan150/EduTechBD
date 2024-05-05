export default function Testimonial() {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Read Testimonial</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item text-center">
            <img
              className="border rounded-circle p-2 mx-auto mb-3"
              src="webpage/img/testimonial-2.jpg"
              style={{ width: "80px", height: "80px" }}
            />
            <h5 className="mb-0">testimonial name</h5>
            <p>testimonial.profession </p>
            <div className="testimonial-text bg-light text-center p-4">
              <p className="mb-0">testimonial text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
