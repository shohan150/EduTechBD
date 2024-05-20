import { images } from "../assets";

const TopHeader = () => {
  return (
    <>
      <header className="container-fluid bg-primary">
        <div className="row overflow-x-hidden">
          <div className="col-md-8 d-flex gap-3 align-items-center">
            <div className="">
              <a href="/">
                <img height="100px" src={images.logo} />
              </a>
            </div>
            <div className="text-white">
              <p className="p-0 m-0 d-none d-md-block fw-bold fs-3">
                MKS International
              </p>
              <p className="p-0 m-0 d-none d-md-block fw-bold fs-4">
                Ulipur, Kurigram
              </p>
              <p className="p-0 m-0 d-block d-md-none fw-bold fs-5">
                MKS International
              </p>
              <p className="p-0 m-0 d-block d-md-none fs-5">Ulipur, Kurigram</p>
            </div>
          </div>
          <div className="col-md-4 text-end pe-4 d-none d-md-block my-auto">
            <div className="d-inline-block">
              <img
                className="bg-white rounded-3"
                height="80px "
                src={images.mujib}
              />
            </div>
            <div className="d-inline-block" style={{ marginLeft: "5px" }}>
              <img
                className="bg-white rounded-3"
                height="80px"
                src={images.subornoJoyonti}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
