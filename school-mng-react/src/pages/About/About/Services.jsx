import { Fragment, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Services = () => {
  const [services, setServices] = useState([]);
  const { axiosPublic } = useAxiosPublic();

  //   data fetching from api
  useEffect(() => {
    axiosPublic
      .get("/services.json")
      .then((response) => setServices(response.data));
  }, []);
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">

            {/* services items */}
            {services?.map((service) => (
              <Fragment key={service.title}>
                <div
                  className="col-lg-3 col-sm-6 animate__animated animate__fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="service-item text-center pt-3">
                    <div className="p-4">
                      <i className={`fa fa-3x ${service.iconClass} text-primary mb-4`}></i>
                      <h5 className="mb-3">{service.title}</h5>
                      <p>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
