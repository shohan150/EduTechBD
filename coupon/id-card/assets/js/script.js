const form = document.getElementById('id-card-form');
const idNoElement = document.querySelector('.id-no');
const studentNameElement = document.querySelector('.student-name');
const studentImageElement = document.querySelector('.student-image');
const saveButton = document.getElementById("save-button");

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  const idNoTop = parseInt(formData.get('idNoTop'));
  const idNoLeft = parseInt(formData.get('idNoLeft'));
  const idNoSize = parseInt(formData.get('idNoSize'));
  const idNoWeight = parseInt(formData.get('idNoWeight'));
  const nameTop = parseInt(formData.get('nameTop'));
  const nameLeft = parseInt(formData.get('nameLeft'));
  const nameSize = parseInt(formData.get('nameSize'));
  const nameWeight = parseInt(formData.get('nameWeight'));
  const imageTop = parseInt(formData.get('imageTop'));
  const imageLeft = parseInt(formData.get('imageLeft'));
  const borderWidth = parseInt(formData.get('borderWidth'));
  const borderRadius = parseInt(formData.get('borderRadius'));

  // Update element styles based on form values
  idNoElement.style.top = `${idNoTop}px`;
  idNoElement.style.left = `${idNoLeft}px`;
  idNoElement.style.fontSize  = `${idNoSize}px`;
  idNoElement.style.fontWeight  = `${idNoWeight}px`;

  studentNameElement.style.top = `${nameTop}px`;
  studentNameElement.style.left = `${nameLeft}px`;
  studentNameElement.style.fontSize  = `${nameSize}px`;
  studentNameElement.style.fontWeight  = `${nameWeight}px`;

  studentImageElement.style.top = `${imageTop}px`;
  studentImageElement.style.left = `${imageLeft}px`;
  studentImageElement.style.borderRadius  = `${borderRadius}px`;
  studentImageElement.style.borderWidth  = `${borderWidth}px`;
});

saveButton.addEventListener("click", (event)=>{

   event.preventDefault(); // Prevent default form submission

   const formData = new FormData(form);
 
   const idNoTop = parseInt(formData.get('idNoTop'));
   const idNoLeft = parseInt(formData.get('idNoLeft'));
   const idNoSize = parseInt(formData.get('idNoSize'));
   const idNoWeight = parseInt(formData.get('idNoWeight'));
   const nameTop = parseInt(formData.get('nameTop'));
   const nameLeft = parseInt(formData.get('nameLeft'));
   const nameSize = parseInt(formData.get('nameSize'));
   const nameWeight = parseInt(formData.get('nameWeight'));
   const imageTop = parseInt(formData.get('imageTop'));
   const imageLeft = parseInt(formData.get('imageLeft'));
   const borderWidth = parseInt(formData.get('borderWidth'));
   const borderRadius = parseInt(formData.get('borderRadius'));

   const idCardFormat = {
      idNo:{
         top:idNoTop,
         left:idNoLeft,
         size:idNoSize,
         weight:idNoWeight
      },
      name:{
         top:nameTop,
         left:nameLeft,
         size:nameSize,
         weight:nameWeight
      },
      image:{
         top:imageTop,
         left:imageLeft,
         radius: borderRadius,
         width: borderWidth

      }
   }
   console.log(idCardFormat);
})
