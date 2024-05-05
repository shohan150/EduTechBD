import schoolImg from "../../assets/img/course-2.jpg";
export default function History() {
  return (
    <div className="container-xxl  py-5">
      <div className="row px-4 g-5">
        <div
          className="col-lg-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: "400px" }}
        >
          <div className="position-relative h-100 ">
            <img
              className="img-fluid framed position-absolute w-100 h-100"
              src={schoolImg}
              alt=""
              style={{ objectFit: "cover" }}
            />

            <img
              className="img-fluid framed position-absolute w-100 h-100"
              src="webpage/img/cat-1.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            school history heading
          </h6>
          <h1 className="mb-4">school history sub-heading</h1>
          <p> school history text </p>
        </div>
      </div>
    </div>
  );
}
