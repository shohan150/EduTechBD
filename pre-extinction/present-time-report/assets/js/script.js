const employeeReports = [
   { name: "Jalil Raihan", report: [4, 1, 2, 2, 1] },
   { name: "Maya Khan", report: [3, 2, 3, 1, 1] },
   { name: "Rahim Ali", report: [5, 1, 2, 1, 1] },
   { name: "Sara Jahan", report: [2, 3, 2, 2, 1] },
   { name: "Omar Faruk", report: [4, 2, 1, 2, 1] }
];

const container = document.getElementById('employeeProgress');

employeeReports.forEach(employee => {
   const employeeDiv = document.createElement('div');
   employeeDiv.className = 'employee-container';

   const nameElement = document.createElement('h4');
   nameElement.textContent = employee.name;
   employeeDiv.appendChild(nameElement);

   const progressBar = document.createElement('div');
   progressBar.className = 'progress-bar';

   employee.report.forEach((hours, index) => {
       for (let i = 0; i < hours; i++) {
           const segment = document.createElement('div');
           segment.className = 'progress-segment ' + (index % 2 === 0 ? 'present' : 'absent');
           progressBar.appendChild(segment);
       }
   });

   employeeDiv.appendChild(progressBar);
   container.appendChild(employeeDiv);
});