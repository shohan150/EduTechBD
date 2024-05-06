import BreadCrump from "../components/BreadCrump";

const PageBanner = () => {
  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              {/* banner title */}
              <h1 className="display-3 text-white animated slideInDown">
                About Us
              </h1>

              {/* Breadcrumb component */}
              <BreadCrump />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
