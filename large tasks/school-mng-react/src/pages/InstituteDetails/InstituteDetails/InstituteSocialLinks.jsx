const InstituteSocialLinks = () => {
  return (
    <>
      <div className="card mt-3">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <i className="fs-4 fas fa-globe"></i>
            <span className="text-secondary">
              https://alkawsar.edubd.online/
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <i className="fs-4 fab fa-facebook-square"></i>
            <span className="text-secondary">fb.com/mks</span>
          </li>

          <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
            <i className="fs-4 fab fa-youtube"></i>
            <span className="text-secondary">youtube.com/mks</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default InstituteSocialLinks;
