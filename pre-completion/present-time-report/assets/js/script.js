const employeeReports = [
   { name: "Jalil Raihan", id: "001", report: [8.2, 0.6, 2, 2, 2.8] },
   { name: "Maya Khan", id: "002", report: [3.5, 1.58, 3.12, 4.79, 1.43] },
   { name: "Rahim Ali", id: "003", report: [5.2, 1.5, 2, 1.67, 0.35] },
   { name: "Sara Jahan", id: "004", report: [2.1, .32, 4.3, 1.2, 3] },
   { name: "Omar Faruk", id: "005", report: [4.1, 1.84, 2.5, 2.7, 1.7] }
];

const employeeSearched = [];

const container = document.getElementById('employeeProgress');
const searchBox = document.getElementById('search-input');

function delay(callback, ms) {
  setTimeout(callback, ms);
}

searchBox.addEventListener('input', () => {
  if(searchBox.value.length === 0){
    employeeSearched.length = 0;
    printReport(employeeReports);
  }
  delay(() => {
    employeeSearched.length = 0;
    const searchValue = searchBox.value.toLowerCase();
    employeeReports.forEach(employee => {
      if (employee.name.toLowerCase().includes(searchValue) || employee.id.toLowerCase().includes(searchValue)) {
        employeeSearched.push(employee);
      }
    });
    container.innerHTML = '';
    printReport(employeeSearched);
  }, 400);
});

function printReport(employeeArray){
  employeeArray.forEach(employee => {
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
}

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

printReport(employeeReports);