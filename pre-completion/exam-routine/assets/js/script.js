//all classes
const classes = ["one", "two", "three"];

// where exam routine will be made
const container = document.getElementById('examRoutine');

// Create header row with 12 items
//initial header
const header = document.createElement('div');
header.className = 'grid-item header';
header.textContent = "Classes"; 
container.appendChild(header);

// eleven exam headers
for (let i = 1; i < 12; i++) {
    const header = document.createElement('div');
    header.className = 'grid-item header';
    header.textContent = `Exam ${i}`; 
    container.appendChild(header);
}

// Create grid items for each class
classes.forEach(className => {
   const singleClass = document.createElement('div');
   singleClass.className = 'grid-item single-class';
   singleClass.textContent = `Class ${className}`;
   container.appendChild(singleClass);

    for (let i = 1; i < 12; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

         // Create a select element
         const formField = document.createElement('div');
         formField.className = 'form-field';

         const label = document.createElement('label');
         label.textContent = "Select Subject";
         formField.appendChild(label);

         const selectElement = document.createElement('select');
         selectElement.name = 'select_subject';
         selectElement.id = 'select_subject';

         // Define options for the select element
         const options = [
         { value: '0', text: 'Select Subject' },
         { value: 'Bangla', text: 'Bangla' },
         { value: 'English', text: 'English' },
         { value: 'Math', text: 'Math' },
         ];

         options.forEach(optionData => {
            const option = document.createElement('option');
            option.value = optionData.value;
            option.textContent = optionData.text;
            selectElement.appendChild(option);
         });

         formField.appendChild(selectElement);
         gridItem.appendChild(formField); 

         const formFields = [
            { label: 'Exam Date', type: 'date' },
            { label: 'Start Time', type: 'time' },
            { label: 'End Time', type: 'time' }
         ];

         formFields.forEach(field => {
               const formField = document.createElement('div');
               formField.className = 'form-field';

               const label = document.createElement('label');
               label.textContent = field.label;
               formField.appendChild(label);

               const input = document.createElement('input');
               input.type = field.type;
               formField.appendChild(input);

               gridItem.appendChild(formField);
         });

      container.appendChild(gridItem);
    }
})