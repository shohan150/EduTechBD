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
  const idNoColor = formData.get('idNoColor');
  const nameTop = parseInt(formData.get('nameTop'));
  const nameLeft = parseInt(formData.get('nameLeft'));
  const nameSize = parseInt(formData.get('nameSize'));
  const nameWeight = parseInt(formData.get('nameWeight'));
  const nameColor = formData.get('nameColor');
  const imageTop = parseInt(formData.get('imageTop'));
  const imageLeft = parseInt(formData.get('imageLeft'));
  const imageSize = parseInt(formData.get('imageSize'));
  const borderWidth = parseInt(formData.get('borderWidth'));
  const borderRadius = parseInt(formData.get('borderRadius'));
  const imageBorderColor = formData.get('imageBorderColor');


  // Update element styles based on form values
  idNoElement.style.top = `${idNoTop}%`;
  idNoElement.style.left = `${idNoLeft}%`;
  idNoElement.style.fontSize  = `${idNoSize}px`;
  idNoElement.style.fontWeight  = `${idNoWeight}`;
  idNoElement.style.color  = idNoColor;

  studentNameElement.style.top = `${nameTop}%`;
  studentNameElement.style.left = `${nameLeft}%`;
  studentNameElement.style.fontSize  = `${nameSize}px`;
  studentNameElement.style.fontWeight  = `${nameWeight}`;
  studentNameElement.style.color  = nameColor;

  studentImageElement.style.top = `${imageTop}%`;
  studentImageElement.style.left = `${imageLeft}%`;
  studentImageElement.style.height = `${imageSize}px`;
  studentImageElement.style.width = `${imageSize}px`;
  studentImageElement.style.borderRadius  = `${borderRadius}px`;
  studentImageElement.style.borderWidth  = `${borderWidth}px`;
  studentImageElement.style.borderColor  = imageBorderColor;

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
