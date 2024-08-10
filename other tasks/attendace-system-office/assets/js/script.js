function displayDayAndDate() {
   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const today = new Date();
   const dayOfWeek = daysOfWeek[today.getDay()];
   const date = today.toLocaleDateString();
 
   document.getElementById("dayAndDate").textContent = `${dayOfWeek}, ${date}`;
 }
 
 displayDayAndDate();
 