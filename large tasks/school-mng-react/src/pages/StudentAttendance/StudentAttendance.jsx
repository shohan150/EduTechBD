// import "./StudentAttendance";
import "./StudentAttendance.css";

export default function StudentAttenance() {
  return (
    <div
      className="container-xxl py-5 animate__animated animate__fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="card">
        <div className="card-body">
          <form action="{% url 'f_student_attendance' %}" method="post">
            <div className="col-auto d-flex justify-content-between gap-3">
              <input
                type="month"
                className="form-control"
                id="searchMonth"
                placeholder="Select Month"
                value=""
                name="searchMonth"
                min="2023-01"
                max="2030-12"
                required
              />

              <select className="form-select" name="class_name_id">
                <option disabled hidden selected>
                  Select Class
                </option>

                <option value="{{class.id}}">
                  class shift id class section id
                </option>
                <option value="{{class.id}}">
                  class shift id class section id
                </option>
              </select>

              <button
                type="submit"
                className=" btn btn-primary"
                id="searchButton"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* <div className="table-responsive">
          <div className="pt-4" id="calendar"></div>
        </div> */}

        <div className="table-responsive">
          <div className="pt-4" id="calendar">
            <table className="calendar-table">
              <tbody>
                <tr>
                  <td rowSpan="2">Student Name</td>
                  <td colSpan="31">May 2024 - Class: One A</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
