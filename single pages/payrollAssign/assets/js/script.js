//
document.getElementById('select-all').addEventListener('change', function() {
   const checkboxes = document.querySelectorAll('.edit-checkbox');
   const isEditing = this.checked;

   checkboxes.forEach(checkbox => {
       checkbox.checked = isEditing;
       const row = checkbox.closest('tr');
       toggleEditMode(row, isEditing);
   });
});

document.querySelectorAll('.edit-checkbox').forEach(checkbox => {
   checkbox.addEventListener('change', function() {
       const row = this.closest('tr');
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

   if (isEditing) {
       // Replace cell content with input fields
       idCell.innerHTML = `<input type="text" value="${idCell.textContent}">`;
       nameCell.innerHTML = `<input type="text" value="${nameCell.textContent}">`;
       designationCell.innerHTML = `<input type="text" value="${designationCell.textContent}">`;
   } else {
       // Save the input field values back to the table
       const idInput = idCell.querySelector('input').value;
       const nameInput = nameCell.querySelector('input').value;
       const designationInput = designationCell.querySelector('input').value;

       idCell.textContent = idInput;
       nameCell.textContent = nameInput;
       designationCell.textContent = designationInput;
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
           designation: row.querySelector('.designation').textContent.trim()
       };
       tableData.push(rowData);
   });

   const jsonData = JSON.stringify(tableData, null, 2); // Convert to JSON
   console.log(jsonData); // Log JSON to the console
});
