const form = document.getElementById('id-card-form');
const idNoElement = document.querySelector('.id-no');
const studentNameElement = document.querySelector('.student-name');
const studentImageElement = document.querySelector('.student-image');
const saveButton = document.getElementById("save-button");

const getInputValues = () => {
  return {
    idNoTop: parseInt(document.getElementById('id-no-top').value),
    idNoLeft: parseInt(document.getElementById('id-no-left').value),
    idNoSize: parseInt(document.getElementById('id-size').value),
    idNoWeight: parseInt(document.getElementById('id-weight').value),
    idNoColor: document.getElementById('id-color').value,
    nameTop: parseInt(document.getElementById('name-top').value),
    nameLeft: parseInt(document.getElementById('name-left').value),
    nameSize: parseInt(document.getElementById('name-size').value),
    nameWeight: parseInt(document.getElementById('name-weight').value),
    nameColor: document.getElementById('name-color').value,
    imageTop: parseInt(document.getElementById('image-top').value),
    imageLeft: parseInt(document.getElementById('image-left').value),
    imageSize: parseInt(document.getElementById('image-size').value),
    borderWidth: parseInt(document.getElementById('image-border-width').value),
    borderRadius: parseInt(document.getElementById('image-border-radius').value),
    imageBorderColor: document.getElementById('image-border-color').value
  };
};

const updateStyles = (values) => {
  idNoElement.style.top = `${values.idNoTop}%`;
  idNoElement.style.left = `${values.idNoLeft}%`;
  idNoElement.style.fontSize = `${values.idNoSize}px`;
  idNoElement.style.fontWeight = `${values.idNoWeight}`;
  idNoElement.style.color = values.idNoColor;

  studentNameElement.style.top = `${values.nameTop}%`;
  studentNameElement.style.left = `${values.nameLeft}%`;
  studentNameElement.style.fontSize = `${values.nameSize}px`;
  studentNameElement.style.fontWeight = `${values.nameWeight}`;
  studentNameElement.style.color = values.nameColor;

  studentImageElement.style.top = `${values.imageTop}%`;
  studentImageElement.style.left = `${values.imageLeft}%`;
  studentImageElement.style.height = `${values.imageSize}px`;
  studentImageElement.style.width = `${values.imageSize}px`;
  studentImageElement.style.borderRadius = `${values.borderRadius}px`;
  studentImageElement.style.borderWidth = `${values.borderWidth}px`;
  studentImageElement.style.borderColor = values.imageBorderColor;
};

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  const values = getInputValues();
  updateStyles(values);
});

saveButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission
  const values = getInputValues();

  const idCardFormat = {
    idNo: {
      top: values.idNoTop,
      left: values.idNoLeft,
      size: values.idNoSize,
      weight: values.idNoWeight,
      color: values.idNoColor
    },
    name: {
      top: values.nameTop,
      left: values.nameLeft,
      size: values.nameSize,
      weight: values.nameWeight,
      color: values.nameColor
    },
    image: {
      top: values.imageTop,
      left: values.imageLeft,
      size: values.imageSize,
      radius: values.borderRadius,
      width: values.borderWidth,
      borderColor: values.imageBorderColor
    }
  };

  console.log(idCardFormat);
});
