const ContactDetails = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
        <h5>Get In Touch</h5>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim id
          exercitationem nobis suscipit beatae aspernatur.
        </p>
        <div className="d-flex align-items-center mb-3">
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="fa fa-map-marker-alt text-white"></i>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">Office</h5>
            <p className="mb-0">Office Address</p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="fa fa-phone-alt text-white"></i>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">Mobile</h5>
            <p className="mb-0">012536497511</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div
            className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
            style={{ width: "50px", height: "50px" }}
          >
            <i className="fa fa-envelope-open text-white"></i>
          </div>
          <div className="ms-3">
            <h5 className="text-primary">Email</h5>
            <p className="mb-0">test@email.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
