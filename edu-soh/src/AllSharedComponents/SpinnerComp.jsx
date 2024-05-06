import { Spinner } from "react-bootstrap";

const SpinnerComp = ({ showSpinner }) => {
  return (
    <>
      <Spinner
        className={showSpinner ? "" : "d-none"}
        animation="border"
        role="status"
        variant="success"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};

export default SpinnerComp;
