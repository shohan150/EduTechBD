export default function Notice() {
  return (
    <div className="container-xxl pb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Notice
          </h6>
          <h1 className="mb-5">School Notice</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          <div className="testimonial-item text-center">
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
        </div>
      </div>
    </div>
  );
}
