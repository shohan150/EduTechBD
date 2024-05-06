const BreadCrump = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Home
            </a>
          </li>
          <li className="breadcrumb-item">
            <a className="text-white" href="#">
              Pages
            </a>
          </li>
          <li className="breadcrumb-item text-white active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrump;
