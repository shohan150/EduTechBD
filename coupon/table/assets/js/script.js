document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject");
  const periods = document.querySelectorAll(".period");
  const deleteButtons = document.querySelectorAll(".delete");

  subjects.forEach((subject) => {
    subject.addEventListener("dragstart", dragStart);
  });

  periods.forEach((period) => {
    period.addEventListener("dragover", dragOver);
    period.addEventListener("dragleave", dragLeave);
    period.addEventListener("drop", drop);
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteContent);
  });

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.innerText);
  }

  function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  }

  function dragLeave(e) {
    e.currentTarget.classList.remove("drag-over");
  }

  function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");
    const text = e.dataTransfer.getData("text/plain");
    const clonedSubject = document.createElement("div");
    clonedSubject.className = "subject";
    clonedSubject.innerText = text;
    e.currentTarget.innerHTML = ""; // Clear existing content
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.innerText = "x";
    deleteButton.addEventListener("click", deleteContent);
    e.currentTarget.appendChild(clonedSubject);
    e.currentTarget.appendChild(deleteButton);
  }

  function deleteContent(e) {
    e.stopPropagation();
    const periodDiv = e.currentTarget.parentElement;
    periodDiv.innerHTML = '<button class="delete">x</button>';
    periodDiv.querySelector(".delete").addEventListener("click", deleteContent);
  }
});
