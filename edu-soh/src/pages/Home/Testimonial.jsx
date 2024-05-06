import TestimonialCarousal from "./TestimonialCarousal";

export default function Testimonial() {
  return (
    <div
      className="container-xxl py-5 animate__animated animate__fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Read Testimonial</h1>
        </div>
        <TestimonialCarousal />
      </div>
    </div>
  );
}
