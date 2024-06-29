//dummy data
const students = [
   { id: '001', name: 'Zabbar Shah', class: 'one', section: 'Tiger' },
   { id: '002', name: 'Alim Mia', class: 'one', section: 'Tiger' },
   { id: '003', name: 'Halim Jaman', class: 'one', section: 'Tiger' },
   { id: '004', name: 'Karim Uddin', class: 'one', section: 'Tiger' },
   { id: '005', name: 'Salim Khan', class: 'one', section: 'Tiger' },
   { id: '001', name: 'Zabbar Shah', class: 'one', section: 'Tiger' },
   { id: '002', name: 'Alim Mia', class: 'one', section: 'Tiger' },
   { id: '003', name: 'Halim Jaman', class: 'one', section: 'Tiger' },
   { id: '004', name: 'Karim Uddin', class: 'one', section: 'Tiger' },
   { id: '005', name: 'Salim Khan', class: 'one', section: 'Tiger' },
   { id: '001', name: 'Zabbar Shah', class: 'one', section: 'Tiger' },
   { id: '002', name: 'Alim Mia', class: 'one', section: 'Tiger' },
   { id: '003', name: 'Halim Jaman', class: 'one', section: 'Tiger' },
   { id: '004', name: 'Karim Uddin', class: 'one', section: 'Tiger' },
   { id: '005', name: 'Salim Khan', class: 'one', section: 'Tiger' },
];

const tableBody = document.getElementById('tableBody');
const selectAllCheckbox = document.getElementById('selectAll');
const showSelectedButton = document.getElementById('showSelected');
let selectedStudents = [];

function renderTable(data) {
   tableBody.innerHTML = '';
   data.forEach((student, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
         <td style="width: 40px"><input type="checkbox" class="selectStudent" data-index="${index}" /></td>
         <td id="test12">${student.id}</td>
         <td style="width: 40%">${student.name}</td>
         <td>${student.class}</td>
         <td>${student.section}</td>
      `;
      //doesn't work. because node created but not added to DOM yet.
      // document.getElementById("test12").innerHTML= "test";
      tableBody.appendChild(row);
      //now it is added to DOM
      // document.getElementById("test12").innerHTML= "test";
   });

}

function handleSelectAll(event) {
   //check select all button chacked state
   const isChecked = event.target.checked;
   //take all the rows and update their checked state.
   const checkboxes = document.querySelectorAll('.selectStudent');
   selectedStudents = [];
   checkboxes.forEach((checkbox, index) => {
      checkbox.checked = isChecked;
      //if isChecked=true fill the selectedStudents else it is going to stay empty.
      if (isChecked) {
         selectedStudents.push(students[index]);
      }
   });
}

function handleSelectStudent(event) {
   //console.log(event.target.dataset);
   const index = event.target.dataset.index;
   const student = students[index];
   if (event.target.checked) {
      selectedStudents.push(student);
   } else {
      selectedStudents = selectedStudents.filter(s => s.id !== student.id);
   }
}

function showSelectedStudents() {
   //for checking if it's working.
   console.log(selectedStudents);
}

selectAllCheckbox.addEventListener('change', handleSelectAll);

tableBody.addEventListener('change', (event) => {
   if (event.target.classList.contains('selectStudent')) {
      handleSelectStudent(event);
   }
});
showSelectedButton.addEventListener('click', showSelectedStudents);

renderTable(students);

