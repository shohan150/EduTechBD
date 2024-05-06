export default function StudentList() {
  return (
    <>
      <div className="container-xxl pt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className=" ">
          <div className="">
            <form action="{% url 'fstudent_list' %}" method="post">
              <div className="d-flex gap-2">
                <select className="form-select" name="class_name_id" required>
                  <option disabled hidden selected>
                    Select Class
                  </option>

                  <option value="{{class.id}}">class 1</option>
                  <option value="{{class.id}}">class 2</option>
                  <option value="{{class.id}}">class 3</option>
                </select>

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="searchButton"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <main className="table" id="customers_table">
          <section className="table__header">
            {/* if classconf  */}
            <h1>Class:classconf</h1>
            {/* else  */}
            <h1>Student List</h1>
            {/* endif  */}

            <div className="css_input-group">
              <input type="search" placeholder="Search Data..." />
              <img src="images/search.png" alt="" />
            </div>
          </section>
          <section className="table__body">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Student Id</th>
                  <th>Name</th>
                  <th>Roll</th>
                  <th>Parent Name</th>
                </tr>
              </thead>
              <tbody>
                {/* for student in studentList  */}
                <tr>
                  <td>counter</td>
                  <td>student_id</td>
                  <td>student_field.name</td>
                  <td>roll_no</td>
                  <td>parent_id</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}
