import { Fragment } from "react";

const SelectClass = ({ title, items }) => {
  return (
    <>
      <div
        className="container-xxl pt-5 animate__animated animate__fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className=" ">
          <div className="">
            <div className="d-flex gap-2 mx-1">
              <select
                className="form-select"
                name="class_id"
                id="classSelect"
                required
              >
                <option disabled hidden selected>
                  Select {title}
                </option>

                {items.map((item, i) => (
                  <Fragment key={i + title}>
                    <option value={item}>{item}</option>
                  </Fragment>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectClass;
