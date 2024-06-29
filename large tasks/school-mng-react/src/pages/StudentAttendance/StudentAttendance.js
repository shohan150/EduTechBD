document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const searchButton = document.getElementById("searchButton");

  const classname = "{{ class_name}}";

  console.log(classname);

  // const employees = {{ attendanceData|safe }};

  // const holidays = {{ holidayData|safe }};

  // Days to mark as weekends (Friday and Saturday)
  const weekendDays = [5, 6];

  function generateCalendar(year, month) {
    const calendarTable = document.createElement("table");
    calendarTable.classList.add("calendar-table");

    const tbody = document.createElement("tbody");

    // Create a row for "Employee Name" and leave a space for the month and date
    const employeeNameRow = document.createElement("tr");

    const employeeNameCell = document.createElement("td");
    employeeNameCell.textContent = "Student Name";
    employeeNameCell.rowSpan = 2;
    employeeNameRow.appendChild(employeeNameCell);

    const monthName = new Intl.DateTimeFormat("en-US", {
      month: "long",
    }).format(new Date(year, month, 1));
    const yearName = year;
    const monthYearCell = document.createElement("td");
    monthYearCell.colSpan = daysInMonth(year, month);
    monthYearCell.textContent = `${monthName} ${yearName} - Class: ${classname}`;
    employeeNameRow.appendChild(monthYearCell);

    tbody.appendChild(employeeNameRow);

    // Create a row for the dates
    const dateRow = document.createElement("tr");

    for (let day = 1; day <= daysInMonth(year, month); day++) {
      const cell = document.createElement("td");
      cell.textContent = day;
      dateRow.appendChild(cell);
    }

    tbody.appendChild(dateRow);

    employees.forEach((employee) => {
      const row = document.createElement("tr");

      // Create a cell for the employee name
      const nameCell = document.createElement("td");
      nameCell.textContent = employee.name;
      row.appendChild(nameCell);

      // Create cells for attendance or holidays/weekends
      for (let day = 1; day <= daysInMonth(year, month); day++) {
        const cell = document.createElement("td");

        // Check if the day is a holiday, weekend, or display 'P' or 'A'
        if (holidays.includes(day)) {
          cell.textContent = "H";
        } else if (weekendDays.includes(new Date(year, month, day).getDay())) {
          cell.textContent = "W";
        } else {
          const attendanceDate = employee.attendance.includes(day) ? day : "";
          const span = document.createElement("span");
          span.textContent = attendanceDate ? "P" : "A";

          // Set color based on attendance status
          span.style.color = attendanceDate ? "green" : "red";
          cell.appendChild(span);
        }

        row.appendChild(cell);
      }

      tbody.appendChild(row);
    });

    calendarTable.appendChild(tbody);
    calendar.innerHTML = "";
    calendar.appendChild(calendarTable);
  }

  function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  generateCalendar(new Date().getFullYear(), new Date().getMonth());

  searchButton.addEventListener("click", function () {
    const searchMonth = document.getElementById("searchMonth").value;
    const searchYear = parseInt(searchMonth.split("-")[0]);
    const searchMonthValue = parseInt(searchMonth.split("-")[1]) - 1; // JavaScript months are zero-based

    generateCalendar(searchYear, searchMonthValue);
  });
});
