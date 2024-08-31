const tabList = document.querySelector('.tab-list');
const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelector('.tab-content');
const tabPanels = document.querySelectorAll('.tab-panel');

tabList.addEventListener('click', (event) => {
  const clickedTabItem = event.target;

  if (clickedTabItem.classList.contains('tab-item')) {
    // Remove active class from all tab items and panels
    tabItems.forEach((item) => item.classList.remove('active'));
    tabPanels.forEach((panel) => panel.classList.remove('active'));

    // Add active class to clicked tab item and its corresponding panel
    clickedTabItem.classList.add('active');
    const panelIndex = Array.from(tabItems).indexOf(clickedTabItem);
    tabPanels[panelIndex].classList.add('active');
  }


  
//form column based search feature
const studentTableBody = document.querySelector('.active .student-table tbody');
const formSearchFields = document.querySelectorAll('.active .student-table thead th input');
const studentData = document.querySelectorAll('.active .student-table tbody tr');

formSearchFields.forEach(formSearchField => 
   formSearchField.addEventListener('input', (event) =>{
      const panelIndex = Array.from(formSearchFields).indexOf(event.target);

      studentTableBody.innerHTML = "";

      studentData.forEach(singleStudentData =>{
         const searchedColumnData = singleStudentData.querySelectorAll('td')[panelIndex];

         console.log(searchedColumnData.textContent.toLowerCase().includes(event.target.value.toLowerCase()));
         
         if(searchedColumnData.textContent.toLowerCase().includes(event.target.value.toLowerCase())){
            studentTableBody.innerHTML += singleStudentData.innerHTML;
         }
      })
   })
)

});

// Download table data as PDF
document.getElementById('download-pdf').addEventListener('click', () => {
   const { jsPDF } = window.jspdf;
   const doc = new jsPDF();

   const table = document.querySelector('.tab-panel.active table.student-table');
   const rows = table.rows;
   let content = [];

   for (let i = 0; i < rows.length; i++) {
       let cells = rows[i].cells;
       let rowContent = [];
       for (let j = 0; j < cells.length; j++) {
           rowContent.push(cells[j].innerText);
       }
       content.push(rowContent);
   }

   doc.autoTable({
       head: [content[0]],
       body: content.slice(1),
   });

   doc.save('table-data.pdf');
});

// Download table data as Excel
document.getElementById('download-excel').addEventListener('click', () => {
   const table = document.querySelector('.tab-panel.active table.student-table');
   const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
   XLSX.writeFile(wb, "table-data.xlsx");
});
