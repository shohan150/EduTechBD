const routine = [
   ["12/2/2024 (Saturday)", "Math", "Science", "English", "Math", "Art", "PE", "Music"],
   ["13/2/2024 (Sunday)", "Science", "Math", "Geography", "History", "English", "Art", "PE"],
   ["14/2/2024 (Monday)", "English", "Geography", "Science", "Math", "History", "English", "Art"],
   ["15/2/2024 (Tuesday)", "Math", "English", "PE", "Science", "Geography", "Math", "Music"],
   ["16/2/2024 (Wednesday)", "Art", "Music", "Math", "English", "PE", "Science", "History"],
   ["17/2/2024 (Thursday)", "Science", "Art", "Geography", "Math", "English", "PE", "Music"],
   ["18/2/2024 (Friday)", "Music", "PE", "History", "Science", "Math", "English", "Geography"]
 ];

 // Function to populate the table
 function populateTable() {
   const tableBody = document.querySelector("#examTable tbody");
   routine.forEach(day => {
     const row = document.createElement("tr");
     day.forEach(subject => {
       const cell = document.createElement("td");
       cell.textContent = subject;
       row.appendChild(cell);
     });
     tableBody.appendChild(row);
   });
 }

 // Populate the table on page load
 populateTable();