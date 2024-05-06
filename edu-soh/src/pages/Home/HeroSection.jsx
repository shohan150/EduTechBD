import HeroSlider from "./HeroSlider";

export default function HeroSection() {
  return (
    <div className="container-xxl mb-5">
      <div className="row py-4">
        <div className="col-md-8">
          <HeroSlider />
        </div>
        <div className="col-md-4 pt-5 pt-md-0">
          <div className="vendor-info">
            <p className="vendor-info-author-title  bg-primary text-white p-1">
              Education Corner
            </p>
            <div className="vendor-info-main">
              <div>
                <div className="row g-2  pt-4 pb-1">
                  <div className="col-md-6">
                    <a href="student_attendance">
                      <div className="card border-warning mx-sm-1 p-3">
                        <div className="card border-warning shadow text-secondary p-3 my-card">
                          <i className="fas fs-4 fa-fingerprint"></i>
                        </div>
                        <div className="text-center mt-3 pt-3">
                          <h5>Attendence</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="fclass_routine">
                      <div className="card border-warning mx-sm-1 p-3">
                        <div className="card border-warning shadow text-secondary p-3 my-card">
                          <i className="far fs-4 fa-clock"></i>
                        </div>
                        <div className=" text-center mt-3 pt-3">
                          <h5>Class Routine</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="">
                      <div className="card border-warning mx-sm-1 p-3">
                        <div className="card border-warning shadow text-secondary p-3 my-card">
                          <i className="far fs-4 fa-chart-bar"></i>
                        </div>
                        <div className="text-danger text-center mt-3 pt-3">
                          <h5>Exam Result</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="">
                      <div className="card border-warning mx-sm-1 p-3">
                        <div className="card border-warning shadow text-secondary p-3 my-card">
                          <i className="far fs-4 fa-money-bill-alt"></i>
                        </div>
                        <div className="text-warning text-center mt-3 pt-3">
                          <h5>Fees Info</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vendor-info">
            <p className="vendor-info-author-title  bg-primary text-white p-1">
              Follow us on Facebook
            </p>
            <div className="vendor-info-main">
              {/* <!-- {% if page_name %} --> */}
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F{{page_name}}&tabs=timeline&width=500&height=150&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="450"
                height="135"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
              {/* <!-- {% endif %} --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
