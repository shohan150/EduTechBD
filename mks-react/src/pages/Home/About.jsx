import person from "../../assets/img/cat-4.jpg";
export default function About() {
  return (
    <div className="container-xxl  py-5">
      <div className="row  g-5">
        <div
          className="col-lg-3 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: "400px" }}
        >
          <div className="position-relative h-75 ">
            <img
              className="img-fluid schoolframed position-absolute w-100 h-100"
              src={person}
              alt=""
              style={{ objectFit: "cover" }}
            />

            <img
              className="img-fluid framed position-absolute w-100 h-100"
              src="webpage/img/testimonial-2.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className=" d-flex justify-content-center pt-4 px-1">
            <a className="btn btn-md-square rounded-1 btn-primary mx-1" href="">
              <i className="fab fs-4 fa-facebook-f"></i>
            </a>
            <a className="btn btn-md-square rounded-1 btn-primary mx-1" href="">
              <i className="fab fs-4 fa-twitter"></i>
            </a>
            <a className="btn btn-md-square rounded-1 btn-primary mx-1" href="">
              <i className="fab fs-4 fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            heading
          </h6>
          <h1 className="mb-4">sub heading</h1>
          <p>text</p>
          <a className="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
