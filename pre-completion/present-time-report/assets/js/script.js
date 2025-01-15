const employeeReports = [
   { name: "Jalil Raihan", report: [8.2, 0.6, 2, 2, 2.8] },
   { name: "Maya Khan", report: [3.5, 2.58, 3.12, 4.79, 1.43] },
   { name: "Rahim Ali", report: [5.2, 1.5, 2, 1.67, 0.35] },
   { name: "Sara Jahan", report: [2.1, .32, 4.3, 1.2, 3] },
   { name: "Omar Faruk", report: [4.1, 1.84, 2.5, 2.7, 1.7] }
];

const container = document.getElementById('employeeProgress');

employeeReports.forEach(employee => {
   const employeeDiv = document.createElement('div');
   employeeDiv.className = 'employee-container';

   const infoContainer = document.createElement('div');
   infoContainer.className = 'infoContainer';
   const nameElement = document.createElement('h4');
   const presentDuration = document.createElement('span');

   const progressBar = document.createElement('div');
   progressBar.className = 'duration-bar';

   let totalHours = 0;
   let usedWidthPercentage = 0;
   const dutyTime = 10;

   let processedTimeline = [];

   employee.report.forEach(hours => {
       if(((totalHours + hours) > dutyTime)){
        // make the final entry take the whole place
        const toBeAdded = dutyTime - totalHours;
        totalHours += toBeAdded;
        processedTimeline.push(toBeAdded);
       } else{
        // ususal case
        if(totalHours < dutyTime){
          totalHours += hours;
          processedTimeline.push(hours);
        }
       }
   });

   function getPresentTime(){
    let presentCount = 0;

    processedTimeline.forEach((hours, index) => { 
      if(index % 2 === 0){
        presentCount += hours;
      }
    });

      return presentCount;
    }


   nameElement.textContent = employee.name;
   presentDuration.textContent = `Present Duration: ${getTimeText(getPresentTime())}`;
   infoContainer.appendChild(nameElement);
   infoContainer.appendChild(presentDuration);
   employeeDiv.appendChild(infoContainer);



   processedTimeline.forEach((hours, index) => {
    const ratio = Math.round((hours / dutyTime) * 100);
    const upperSegment = document.createElement('div');
    const segment = document.createElement('div');
    upperSegment.className = 'progress-segment';

    segment.className = (index % 2 === 0 ? 'present' : 'absent');

    // make the final entry take the whole place
    if(index === processedTimeline.length -1){
      upperSegment.style.width = `${100 - usedWidthPercentage}%`;
    }else{
      upperSegment.style.width = `${ratio}%`;
      usedWidthPercentage += ratio;
    }

    // make the unfinished entry gray
    upperSegment.style.width = `${ratio}%`;
    usedWidthPercentage += ratio;

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

