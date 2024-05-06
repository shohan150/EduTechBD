import detailedImg from "../../assets/img/about.jpg";

export default function Details() {
  return (
    <div className="container-xxl  py-5 category">
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-6 col-md-12 animate__animated animate__zoomIn"
              data-wow-delay="0.3s"
            >
              <h4
                style={{ backgroundColor: "#fed86b", color: "#fff" }}
                className=" p-2 mb-3"
              >
                জাতীয় শুদ্ধাচার কৌশল
              </h4>
              <div className="d-flex flex-column ">
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>কর্ম
                  পরিকল্পনা/ আদেশ / বিজ্ঞপ্তি
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>ফোকাল
                  পয়েন্ট কর্মকর্তা ও বিকল্প কর্মকর্তা
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  ত্রৈমাসিক/ষাণ্মাসিক পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 animate__animated animate__zoomIn"
              data-wow-delay="0.5s"
            >
              <h4
                style={{ backgroundColor: "#fed86b", color: "#fff" }}
                className="p-2 mb-3"
              >
                বার্ষিক কর্মসম্পাদন চুক্তি
              </h4>
              <div className="d-flex flex-column ">
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>এপিএ
                  নির্দেশিকা/পরিপত্র/এপিএ টিম
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  চুক্তিসমূহ
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  এপিএএমএস সফটওয়্যার লিংক
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 animate__animated animate__zoomIn"
              data-wow-delay="0.3s"
            >
              <h4
                style={{ backgroundColor: "#fed86b", color: "#fff" }}
                className="p-2 mb-3"
              >
                অভিযোগ প্রতিকার ব্যবস্থাপনা
              </h4>
              <div className="d-flex flex-column ">
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>অনিক ও
                  আপিল কর্মকর্তা
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  মাসিক/ত্রৈমাসিক/বার্ষিক/পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>অভিযোগ
                  দাখিল (অনলাইন আবেদন)
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12 animate__animated animate__zoomIn"
              data-wow-delay="0.5s"
            >
              <h4
                style={{ backgroundColor: "#fed86b", color: "#fff" }}
                className="p-2 mb-3"
              >
                তথ্য অধিকার
              </h4>
              <div className="d-flex flex-column ">
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>আবেদন
                  ও আপিল ফরম
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ
                </a>
                <a className="btn  text-start " href="">
                  <i className="fas pe-2 text-primary fa-caret-right"></i>
                  আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 animate__animated animate__zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: "350px" }}
        >
          <a
            className="position-relative d-block h-100 overflow-hidden"
            href=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src={detailedImg}
              alt=""
              style={{ objectFit: "cover" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
