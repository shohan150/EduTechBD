//DOM purota load hle tarpor execute koro.
document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject");
  const periods = document.querySelectorAll(".period");
  const periodForm = document.getElementById("period-form");
  const scheduleContainer = document.getElementById("schedule");
  const saveButton = document.getElementById("save-button");
  const tableCollapseButton = document.getElementById("table-collapse-button");

  //take the number of periods or columns and create new routine.
  periodForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const numPeriods = formData.get('num-periods');
    const breakPeriod = formData.get('break-period');
    createSchedule(numPeriods, breakPeriod);
  });

  saveButton.addEventListener("click", saveRoutine);


  function createSchedule(numPeriods, breakPeriod) {
    scheduleContainer.innerHTML = ""; // Clear existing schedule

    const days = [ "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    const columnCount = breakPeriod ? parseInt(numPeriods) + 1 : numPeriods;
    scheduleContainer.style.gridTemplateColumns = `100px repeat(${columnCount}, 1fr)`;

    const emptyHeader = document.createElement("div");
    emptyHeader.classList.add("header");
    scheduleContainer.appendChild(emptyHeader); // Empty cell at the top-left

    //period sequence at the top
    for (let i = 1; i <= numPeriods; i++) {      
      if(breakPeriod && i == breakPeriod){
        const breakHeader = document.createElement("div");
        breakHeader.classList.add("header");
        breakHeader.classList.add("break");
        breakHeader.innerText = "Break";
        scheduleContainer.appendChild(breakHeader);
      }

      const header = document.createElement("div");
      header.classList.add("header");
      const firstParagraph = document.createElement("p");
      const secondParagraph = document.createElement("p");
      firstParagraph.innerText = `Period ${i}`;
      secondParagraph.classList.add("time");
      secondParagraph.innerText = "(8:00 AM - 9:00 AM)";
      header.appendChild(firstParagraph);
      header.appendChild(secondParagraph);
      scheduleContainer.appendChild(header);
    }

    //row for each achool day. 
    days.forEach((day, index) => {
      //day name at first
      const dayLabel = document.createElement("div");
      dayLabel.classList.add("day-label");
      dayLabel.innerHTML = day;
      dayLabel.innerHTML += "<i class='bx bx-copy'></i>";
      dayLabel.innerHTML += "<i class='bx bx-paste'></i>";
      scheduleContainer.appendChild(dayLabel);

      //then for each day create empty period field. then add the period field to scheduleContainer
      for (let i = 1; i <= numPeriods; i++) {

        if(breakPeriod && i == breakPeriod){  
          const breakPeriod = document.createElement("div");
          breakPeriod.classList.add("period");
          breakPeriod.classList.add("break");
          const breakContent = document.createElement("p");
          breakContent.innerText = "Break";
          breakPeriod.appendChild(breakContent);
          scheduleContainer.appendChild(breakPeriod);
        }

        const period = document.createElement("div");
        period.classList.add("period");
        //dynamic id for each period field
        period.id = `${day.toLowerCase().slice(0, 3)}-p${i}`;
        //delete button for each field.
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", deleteContent);
        //add the delete button to period
        period.appendChild(deleteButton);
        //add eventListener to each period field.
        period.addEventListener("dragover", dragOver);
        period.addEventListener("dragleave", dragLeave);
        period.addEventListener("drop", drop);
        //finally add each period field to the scheduleContainer
        scheduleContainer.appendChild(period);
      }

      const singleDayPeriods = document.querySelectorAll(`div.period:nth-last-of-type(-n+${columnCount})`);

      copyPasteFeature(Number(columnCount), index, singleDayPeriods);

    });
  }

  function copyPasteFeature (columnCount, index, singleDayPeriods) {
    const copyIcons = document.querySelectorAll ('.day-label i.bx-copy');
    const copyIcon = copyIcons[index];
    copyIcon.addEventListener('click', () => {
      const pasteIcons = document.querySelectorAll ('.day-label i.bx-paste');
      pasteIcons.forEach((pasteIcon, index) =>
        pasteIcon.addEventListener('click', () => {
        const allPeriods =  document.querySelectorAll(`div.period`);
        for (let i = 0; i < columnCount; i++) {

         allPeriods[columnCount*index + i].innerHTML = singleDayPeriods[i].innerHTML;

         // break will not have a delete button. so optional chaining.
         allPeriods[columnCount*index + i].querySelector(".delete")?.addEventListener("click", deleteContent);
        }
      }))
      

    })

  }

  subjects.forEach((subject) => {
    subject.addEventListener("dragstart", dragStart);
  });

  //add eventListern to the existing dummy period fields. So, that the initail routine can also be editable.
  periods.forEach((period) => {
    period.addEventListener("dragover", dragOver);
    period.addEventListener("dragleave", dragLeave);
    period.addEventListener("drop", drop);
  });

 //uses the dataTransfer property of the event object (e.dataTransfer). This object allows to set and retrieve data associated with the drag operation.
 
  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.innerHTML);
  }

  //dragOver and dragLeave combinely, gives a hover like effect. That when the content is put over, the border becomes blue. 

  // the dragover event triggered when a draggable element (subject) is dragged over a potential drop target (period).

  // It uses e.currentTarget.classList.add("drag-over"). e.currentTarget refers to the element that the event listener is attached to.
  function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  }

  //remove the classsList if the dragable element is removed.
  function dragLeave(e) {
    e.currentTarget.classList.remove("drag-over");
  }


  //represents the drop event triggered when a draggable element (subject) is dropped on a target element (period).
  function drop(e) {
    //prevent the browser's default behavior for the drop event.
    e.preventDefault();
    //remove the drag-over class if the element is dropped. 
    e.currentTarget.classList.remove("drag-over");
    //retrieves the transferred data
    const text = e.dataTransfer.getData("text/plain");
    //create e new div and place the div on the period block.
    const clonedSubject = document.createElement("div");
    clonedSubject.className = "subject";
    clonedSubject.innerHTML = text;
    e.currentTarget.innerHTML = ""; // Clear existing content
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", deleteContent);
    e.currentTarget.appendChild(clonedSubject);
    e.currentTarget.appendChild(deleteButton);
  }

  function deleteContent(e) {
    //preventing event bubbling
    e.stopPropagation();
    //retrieves the parent element of the clicked delete button using e.currentTarget.parentElement. 
    const periodDiv = e.currentTarget.parentElement;
    periodDiv.innerHTML = '<button class="delete">X</button>';
        periodDiv
      .querySelector(".delete")
      .addEventListener("click", deleteContent);
}


  function saveRoutine() {
    //create an empty object
    const routineData = {};
    const days = [ "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    days.forEach((day) => {
      //Inside the loop, for each day create an empty array in routineData using the current day as the key. 
      routineData[day] = [];

      //uses querySelectorAll to select all period elements with class period whose IDs start with the lowercase three-letter abbreviation of the current day followed by "-p" 

      const dayPeriods = scheduleContainer.querySelectorAll(
        `.period[id^="${day.toLowerCase().slice(0, 3)}-p"]`
      );

      //It iterates through the selected dayPeriods using another forEach loop.

      dayPeriods.forEach((period) => {
        const subject = period.querySelector(".subject")
          ? period.querySelector(".subject").innerText
          : null;
        routineData[day].push(subject);
      });
    });
    console.log(JSON.stringify(routineData, null, 2));
  }


  tableCollapseButton.addEventListener("click", () => {
    scheduleContainer.classList.toggle("collapsed");
  });
});