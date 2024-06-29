import CommonHeading from "../../AllSharedComponents/CommonHeading";
import ContactDetails from "./Contact/ContactDetails";
import ContactForm from "./Contact/ContactForm";
import Map from "./Contact/Map";

const Contact = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          {/* heading */}
          <CommonHeading
            heading="Contact For Any Query"
            subheading="Contact Us"
          />

          <div className="row g-4">
            {/* contact details */}
            <ContactDetails />

            {/* map */}
            <Map />

            {/* contact form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
