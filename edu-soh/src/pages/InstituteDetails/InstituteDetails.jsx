import CommonHeading from "../../AllSharedComponents/CommonHeading";
import InstituteDesc from "./InstituteDetails/InstituteDesc";
import InstituteIntro from "./InstituteDetails/InstituteIntro";

const InstituteDetails = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="">
          {/* heading */}
          <CommonHeading heading="Institute Details" subheading="Institute" />

          <div className="row gutters-sm mt-4">
            {/* institue introduction */}
            <InstituteIntro />

            {/* institute details */}
            <InstituteDesc />
          </div>
        </div>
      </div>
    </>
  );
};

export default InstituteDetails;
