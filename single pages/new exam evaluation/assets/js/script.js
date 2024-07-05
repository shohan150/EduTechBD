const evaluationNumber = 82;
const scaleFields = document.querySelectorAll('.scale-fields');

function updateScaleSelection() {
  scaleFields.forEach((scaleField) => {
    const icon = scaleField.querySelector('.value i'); 
    icon.classList.remove('bx-checkbox-checked'); 
    console.log(evaluationNumber, scaleField);

    if (evaluationNumber > 90 && scaleField.id === 'one') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    } else if (evaluationNumber <= 90 && evaluationNumber > 80 &&  scaleField.id === 'two') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    } else if (evaluationNumber <= 80 && evaluationNumber > 70 &&  scaleField.id === 'three') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    } else if (evaluationNumber <= 70 && evaluationNumber > 60 &&  scaleField.id === 'four') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    } else if (evaluationNumber <= 60 && evaluationNumber > 50 &&  scaleField.id === 'five') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    } else if (evaluationNumber <= 50 && evaluationNumber > 40 &&  scaleField.id === 'six') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    } else if (evaluationNumber <= 40 && evaluationNumber > 30 &&  scaleField.id === 'seven') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    } else if (evaluationNumber <= 30 && scaleField.id === 'eight') {
      icon.classList.remove('bx-square');
      icon.classList.add('bx-checkbox-checked'); 
    };

    // Update text color of the selected scale-field
    if (icon.classList.contains('bx-checkbox-checked')) {
      const icons = scaleField.querySelector(".icons");
      icons.style.color = '#1489e3';
    } 
  });
}

// Call the function to update selection and color on page load or whenever evaluationNumber changes
updateScaleSelection();


const tableBody = document.querySelector('.evaluation-table tbody');

function updateMarksIcons() {
   const tableRows = tableBody.querySelectorAll('tr');
 
   tableRows.forEach((row) => {
     const markCell = row.querySelector('td:nth-child(4)'); // Select the fourth cell (mark)
     const icons = row.querySelector('.icons'); // Select the icons container
 
     if (!markCell || !icons) {
       return; // Skip this row if any of the elements are missing
     }
 
     const mark = parseInt(markCell.textContent.trim(), 10); // Get the mark as a number
 
     let iconToUpdate; // Variable to store the icon to update
 
     if (mark < 10) {
       icons.children[0].classList="bx bxs-rectangle make-blue"; 
     } else if (mark > 10 && mark <= 15) {
       icons.children[1].classList="bx bxs-circle make-blue";; 
     } else if (mark > 15) {
       icons.children[2].classList="bx bxs-up-arrow make-blue";; 
     }
   });
 }
 
 // Call the function to update icons on page load
 updateMarksIcons();
 
