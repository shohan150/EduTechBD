const Navbar = () => {
  return (
    <>
      <div id="smooth-wrapper " className="sticky-top">
        {/* <!-- Header area --> */}
        <header className="">
          <div
            style={{backgroundColor: '#fed86b', color: '#fff'}}
            className="menu-area menu-area-two"
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-4 hamburger-menu text-primary position-relative">
                  <h5 className="m-0 lchange">Hotline: 01234567891</h5>
                </div>
                <div className="col-lg-8">
                  <div className="nav-wrap d-flex justify-content-end align-items-center">
                    <div className="mainmenu text-right">
                      <ul>
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li className="has-child-menu">
                          <a href="/">Institute Info</a>
                          <ul>
                            <li className="has-child-menu">
                              <a href="/">All List</a>
                              <ul>
                                <li>
                                  <a href="#">Student List</a>
                                </li>
                                <li>
                                  <a href="#">Teacher List</a>
                                </li>
                                <li>
                                  <a href="#">Staff List</a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="#">Institute Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-child-menu">
                          <a href="/">Academic Info</a>
                          <ul>
                            <li className="has-child-menu">
                              <a href="/">Routine Info</a>
                              <ul>
                                <li>
                                  <a href="#">Class Routine</a>
                                </li>
                                <li>
                                  <a href="#">Teacher Routune</a>
                                </li>
                                <li>
                                  <a href="#">Exam Routine</a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-child-menu">
                              <a href="/">Attendance</a>
                              <ul>
                                <li>
                                  <a href="#">Section Wise</a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-child-menu">
                              <a href="/">Exam</a>
                              <ul>
                                <li>
                                  <a href="#">Merit List</a>
                                </li>
                                <li>
                                  <a href="#">Fail List</a>
                                </li>
                                <li>
                                  <a href="#">Section Wise List</a>
                                </li>
                                <li>
                                  <a href="#">Individual Result</a>
                                </li>
                              </ul>
                            </li>

                            <li>
                              <a href="#">Pay Slip</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-child-menu">
                          <a href="/">Gallery</a>
                          <ul>
                            <li>
                              <a href="#">Photo Gallery</a>
                            </li>
                            <li>
                              <a href="#">Video Gallery</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-child-menu">
                          <a href="/">Download</a>
                          <ul>
                            <li>
                              <a href="#">Syllabus</a>
                            </li>
                            <li>
                              <a href="#">Assignment</a>
                            </li>
                            <li>
                              <a href="#">Hand Book</a>
                            </li>
                            <li>
                              <a href="#">Home Work</a>
                            </li>
                            <li>
                              <a href="#">Class Notes</a>
                            </li>
                            <li>
                              <a href="#">Others Download</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-child-menu">
                          <a href="/">More</a>
                          <ul>
                            <li>
                              <a href="#">All Notice</a>
                            </li>
                            <li>
                              <a href="#">হৃদয়ে বঙ্গবন্ধু</a>
                            </li>
                            <li>
                              <a href="#">সুবর্ণ জয়ন্তী কর্ণার</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                      <div className="menu-btn-wrap flex-shrink-0 d-lg-none pb-5">
                        <a
                          href="#"
                          style={{backgroundColor: '#06bbcc', color: '#fff'}}
                          className="btn py-4 px-lg-5 d-flex"
                        >
                          Login Now
                          <i className="fa fa-arrow-right ms-3"></i>
                        </a>
                      </div>
                    </div>
                    <div className="menu-btn-wrap border-start border-3 border-primary flex-shrink-0 d-none d-lg-block">
                      <a href="#" className="btn d-flex">
                        Login Now
                        <i className="fa fa-arrow-right pt-1 ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Menu end --> */}
        </header>
        {/* <!-- Header area End --> */}
      </div>
    </>
  );
};

export default Navbar;
