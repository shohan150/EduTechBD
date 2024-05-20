// import { images } from "../../../assets";

const Routine = ({title}) => {
  return (
    <>
      <div className="container-xxl py-5 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
        <main className="table" id="customers_table">
          <section className="table__header mt-3">
            <h1>{title} Routine</h1>
            <div className="css_input-group d-none d-md-flex">
              <input className="routine_search" type="search" placeholder="Search Data..." />
              {/* <img src={images.searchIcon} alt="" /> */}
              <img style={{opacity: '0.5'}} src="/magnifying-glass-solid.svg" alt="search" />
            </div>
          </section>
          <section className="table__body">
            <table id="classRoutine">
              <thead>
                <tr>
                  <th>Time Slot</th>
                  <th data-day="Sunday">Sunday</th>
                  <th data-day="Monday">Monday</th>
                  <th data-day="Tuesday">Tuesday</th>
                  <th data-day="Wednesday">Wednesday</th>
                  <th data-day="Thursday">Thursday</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9:00 AM to 10:00 AM</td>
                  <td>Math</td>
                  <td>Math</td>
                  <td>Math</td>
                  <td>English</td>
                  <td>English</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default Routine;
