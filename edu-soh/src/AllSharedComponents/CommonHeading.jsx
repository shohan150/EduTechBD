
const CommonHeading = ({subheading, heading}) => {
    return (
        <>
            <div className="text-center animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              {subheading}
            </h6>
            <h1 className="mb-5">{heading}</h1>
          </div>
        </>
    );
};

export default CommonHeading;