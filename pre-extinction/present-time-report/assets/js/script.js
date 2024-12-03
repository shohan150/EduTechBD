const employeeReports = [
   { name: "Jalil Raihan", report: [4.2, 0.6, 2, 2, 2.8] },
   { name: "Maya Khan", report: [3.5, 2.58, 3.12, 4.79, 1.43] },
   { name: "Rahim Ali", report: [5.2, 1.5, 2, 1.67, 0.35] },
   { name: "Sara Jahan", report: [2.1, .32, 2.3, 1.2, 1] },
   { name: "Omar Faruk", report: [4.1, 1.84, 2.51, 2.7, 1.7] }
];

const container = document.getElementById('employeeProgress');

employeeReports.forEach(employee => {
   const employeeDiv = document.createElement('div');
   employeeDiv.className = 'employee-container';

   const nameElement = document.createElement('h4');
   nameElement.textContent = employee.name;
   employeeDiv.appendChild(nameElement);

   const progressBar = document.createElement('div');
   progressBar.className = 'duration-bar';

   let totalHours = 0;
   let usedWidthPercentage = 0;
   employee.report.forEach(hours => {
       totalHours += hours;
   });

   employee.report.forEach((hours, index) => {
    const ratio = Math.round((hours / totalHours) * 100);
    const upperSegment = document.createElement('div');
    const segment = document.createElement('div');
    upperSegment.className = 'progress-segment'
    segment.className = (index % 2 === 0 ? 'present' : 'absent');

    if(index === employee.report.length -1){
      upperSegment.style.width = `${100 - usedWidthPercentage}%`;
    }else{
      upperSegment.style.width = `${ratio}%`;
      usedWidthPercentage += ratio;
    }

    const timeText = getTimeText(hours);
    if(ratio>=5) {segment.innerText = timeText;} else{
      segment.innerText = '!';
    }

    upperSegment.setAttribute('data-time', timeText);
    upperSegment.appendChild(segment);
    progressBar.appendChild(upperSegment);
   });

   employeeDiv.appendChild(progressBar);
   container.appendChild(employeeDiv);
});

function getTimeText(hours) {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);

    let text = '';
    if (wholeHours > 0) {
        text += `${wholeHours}hr `;
    }

    if (minutes > 0) {
        text += `${minutes}m`;
    }

    // Trim any staring, traing space
    return text.trim();
}

