const employeeReports = [
   { name: "Jalil Raihan", report: [4.2, 0.2, 2, 2, 1] },
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

   let totalHours = 0;
   let usedWidthPercentage = 0;
   employee.report.forEach(hours => {
       totalHours += hours;
   });

   employee.report.forEach((hours, index) => {
    const ratio = Math.round((hours / totalHours) * 100);
    const segment = document.createElement('div');
    segment.className = 'progress-segment ' + (index % 2 === 0 ? 'present' : 'absent');
    if(index === employee.report.length -1){
      segment.style.width = `${100 - usedWidthPercentage}%`;
    }else{
      segment.style.width = `${ratio}%`;
      usedWidthPercentage += ratio;
    }
    const timeText = getTimeText(hours);
    if(ratio>=10) segment.innerText = timeText;
    progressBar.appendChild(segment);
   });

   employeeDiv.appendChild(progressBar);
   container.appendChild(employeeDiv);
});

function getTimeText(hours) {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);

    // // Construct the time text
    // const hourText = wholeHours === 1 ? 'hour' : 'hours';
    // const minuteText = minutes === 1 ? 'minute' : 'minutes';

    // return `${wholeHours} ${hourText} and ${minutes} ${minuteText}`;


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

