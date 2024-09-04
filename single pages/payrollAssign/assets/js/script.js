//make all checkboxes marked or unmarked.
document.getElementById('select-all').addEventListener('change', function() {
   const checkboxes = document.querySelectorAll('.edit-checkbox');
   //inEditing taken from table header checkbox
   const isEditing = this.checked;

   checkboxes.forEach(checkbox => {
    //if a particular field is already in editing mode and select-all again tries to make it into edit mode, then that field will fail to take value from tablefield and place that on input field. because the field contains input field now not data. that why double edit mode conversion is to be stopped. 
    if(!(checkbox.checked && isEditing)){
       checkbox.checked = isEditing;
       const row = checkbox.closest('tr');
       toggleEditMode(row, isEditing);
    }
   });
});

document.querySelectorAll('.edit-checkbox').forEach(checkbox => {
   checkbox.addEventListener('change', function() {
       const row = this.closest('tr');
       //isEditing taken from particular field
       const isEditing = this.checked;

       //make the whole row editable or show the input field data on the table.
       toggleEditMode(row, isEditing);

       // Check the status of all particular checkboxes on each particular checkbox click to update the header checkbox.
       updateSelectAllCheckbox();
   });
});

function toggleEditMode(row, isEditing) {
   const idCell = row.querySelector('.id');
   const nameCell = row.querySelector('.name');
   const designationCell = row.querySelector('.designation');
   const netSalaryCell = row.querySelector('.net-salary');
   const basicSalaryCell = row.querySelector('.basic');
   const mobileBillCell = row.querySelector('.mobile-bill');
   const providentCell = row.querySelector('.provident');
   const rentCell = row.querySelector('.rent');
   const absentCell = row.querySelector('.absent');
   const bonusCell = row.querySelector('.bonus');
   const coachingCell = row.querySelector('.coaching');
   const allowanceCell = row.querySelector('.allowance');
   const eidBonusCell = row.querySelector('.eid-bonus');
   const lateCell = row.querySelector('.late');
   const earlyLeaveCell = row.querySelector('.early-leave');
   const festivalCell = row.querySelector('.festival');
   const welfareCell = row.querySelector('.welfare');

   if (isEditing) {

       // Replace cell content with input fields
       idCell.innerHTML = `<input type="text" value="${idCell.textContent}">`;
       nameCell.innerHTML = `<input type="text" value="${nameCell.textContent}">`;
       designationCell.innerHTML = `<input type="text" value="${designationCell.textContent}">`;
       netSalaryCell.innerHTML = `<input type="text" value="${netSalaryCell.textContent}">`;
       basicSalaryCell.innerHTML = `<input type="text" value="${basicSalaryCell.textContent}">`;
       mobileBillCell.innerHTML = `<input type="text" value="${mobileBillCell.textContent}">`;
       providentCell.innerHTML = `<input type="text" value="${providentCell.textContent}">`;
       rentCell.innerHTML = `<input type="text" value="${rentCell.textContent}">`;
       absentCell.innerHTML = `<input type="text" value="${absentCell.textContent}">`;
       bonusCell.innerHTML = `<input type="text" value="${bonusCell.textContent}">`;
       coachingCell.innerHTML = `<input type="text" value="${coachingCell.textContent}">`;
       allowanceCell.innerHTML = `<input type="text" value="${allowanceCell.textContent}">`;
       eidBonusCell.innerHTML = `<input type="text" value="${eidBonusCell.textContent}">`;
       lateCell.innerHTML = `<input type="text" value="${lateCell.textContent}">`;
       earlyLeaveCell.innerHTML = `<input type="text" value="${earlyLeaveCell.textContent}">`;
       festivalCell.innerHTML = `<input type="text" value="${festivalCell.textContent}">`;
       welfareCell.innerHTML = `<input type="text" value="${welfareCell.textContent}">`;


   } else {
       // Save the input field values back to the table
       const idInput = idCell.querySelector('input').value;
       const nameInput = nameCell.querySelector('input').value;
       const designationInput = designationCell.querySelector('input').value;
       const netSalary = netSalaryCell.querySelector('input').value;
       const basicSalary = basicSalaryCell.querySelector('input').value;
       const mobileBill = mobileBillCell.querySelector('input').value;
       const provident = providentCell.querySelector('input').value;
       const rent = rentCell.querySelector('input').value;
       const absent = absentCell.querySelector('input').value;
       const bonus = bonusCell.querySelector('input').value;
       const coaching = coachingCell.querySelector('input').value;
       const allowance = allowanceCell.querySelector('input').value;
       const eidBonus = eidBonusCell.querySelector('input').value;
       const late = lateCell.querySelector('input').value;
       const earlyLeave = earlyLeaveCell.querySelector('input').value;
       const festival = festivalCell.querySelector('input').value;
       const welfare = welfareCell.querySelector('input').value;

       idCell.textContent = idInput;
       nameCell.textContent = nameInput;
       designationCell.textContent = designationInput;
       netSalaryCell.textContent = netSalary;
       basicSalaryCell.textContent = basicSalary;
       mobileBillCell.textContent = mobileBill;
       providentCell.textContent = provident;
       rentCell.textContent = rent;
       absentCell.textContent = absent;
       bonusCell.textContent = bonus;
       coachingCell.textContent = coaching;
       allowanceCell.textContent = allowance;
       eidBonusCell.textContent = eidBonus;
       lateCell.textContent = late;
       earlyLeaveCell.textContent = earlyLeave;
       festivalCell.textContent = festival;
       welfareCell.textContent = welfare;
   }
}

function updateSelectAllCheckbox() {
   const checkboxes = document.querySelectorAll('.edit-checkbox');
   // Array.from(checkboxes): Creates a new array from the checkboxes object. If checkboxes is a NodeList (e.g., obtained using document.querySelectorAll), this will convert it into an array.
   // .every(checkbox => checkbox.checked): for each checkbox in the array, it checks if its checked property is true.
   const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
   document.getElementById('select-all').checked = allChecked;
}

document.getElementById('update-button').addEventListener('click', function() {
   const tableData = [];
   const rows = document.querySelectorAll('#editable-table tbody tr');

   rows.forEach(row => {
       const rowData = {
           id: row.querySelector('.id').textContent.trim(),
           name: row.querySelector('.name').textContent.trim(),
           designation: row.querySelector('.designation').textContent.trim(),
           netSalary: row.querySelector('.net-salary').textContent.trim(),
           basic: row.querySelector('.basic').textContent.trim(),
           mobileBill: row.querySelector('.mobile-bill').textContent.trim(),
           provident: row.querySelector('.provident').textContent.trim(),
           rent: row.querySelector('.rent').textContent.trim(),
           absent: row.querySelector('.absent').textContent.trim(),
           bonus: row.querySelector('.bonus').textContent.trim(),
           coaching: row.querySelector('.coaching').textContent.trim(),
           allowance: row.querySelector('.allowance').textContent.trim(),
           eidBonus: row.querySelector('.eid-bonus').textContent.trim(),
           late: row.querySelector('.late').textContent.trim(),
           earlyLeave: row.querySelector('.early-leave').textContent.trim(),
           festival: row.querySelector('.festival').textContent.trim(),
           welfare: row.querySelector('.welfare').textContent.trim(),
       };
       tableData.push(rowData);
   });

   const jsonData = JSON.stringify(tableData, null, 2); // Convert to JSON
   console.log(jsonData); // Log JSON to the console
});
