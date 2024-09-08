// Sample data for students and their attendance status
const students = [
  {
      name: "John Doe",
      attendance: ["present", "absent", "present", "leave", "present", "present", "absent", "present", "present", "leave", "present", "absent", "present", "present", "present", "present", "present", "absent", "present", "leave", "present", "present", "present", "absent", "leave", "present", "present", "absent", "present", "present"],
  },
  {
      name: "Jane Smith",
      attendance: ["present", "present", "leave", "present", "present", "absent", "present", "present", "present", "absent", "leave", "present", "present", "present", "absent", "present", "present", "leave", "present", "present", "absent", "present", "leave", "present", "absent", "present", "leave", "present", "present", "absent"],
  }
];

// Function to calculate attendance statistics
function calculateAttendanceStats(attendance) {
  const presentCount = attendance.filter(day => day === "present").length;
  const absentCount = attendance.filter(day => day === "absent").length;
  const leaveCount = attendance.filter(day => day === "leave").length;
  const percentage = ((presentCount / attendance.length) * 100).toFixed(2);
  return { presentCount, absentCount, leaveCount, percentage };
}

// Function to generate table rows
function generateTableRows() {
  const tableBody = document.querySelector('#attendance-table tbody');

  students.forEach(student => {
      const row = document.createElement('tr');
      
      // Student Name
      const nameCell = document.createElement('td');
      nameCell.textContent = student.name;
      nameCell.classList.add('student-name');
      row.appendChild(nameCell);

      // Attendance statistics
      const { presentCount, absentCount, leaveCount, percentage } = calculateAttendanceStats(student.attendance);

      const presentCell = document.createElement('td');
      presentCell.textContent = presentCount;
      row.appendChild(presentCell);

      const absentCell = document.createElement('td');
      absentCell.textContent = absentCount;
      row.appendChild(absentCell);

      const leaveCell = document.createElement('td');
      leaveCell.textContent = leaveCount;
      row.appendChild(leaveCell);

      const percentageCell = document.createElement('td');
      percentageCell.textContent = `${percentage}%`;
      row.appendChild(percentageCell);

      // Attendance per day (color-coded)
      student.attendance.forEach(status => {
          const dayCell = document.createElement('td');
          dayCell.textContent = status === "present" ? "P" : status === "absent" ? "A" : "L"; // P = Present, A = Absent, L = Leave
          dayCell.classList.add(status); // Add class based on status
          row.appendChild(dayCell);
      });

      // Append row to table body
      tableBody.appendChild(row);
  });
}

// Initialize the table rows when the page loads
generateTableRows();
