// using button id to assign a variable to it...
const addNote = document.getElementById("addNote");

// adding a event listner to the button...
addNote.addEventListener("click", () => {
  // capturing the inputed value in the input tag in variable noteValue...
    const noteValue = document.getElementById("writeNote").value;
  // only make note when input tag have some value in it...
    if (noteValue) {
    // creating a li element adding inuted value into it & appending it to container class div...
      const li = document.createElement("li");
      const node = document.createTextNode(noteValue);
      li.appendChild(node);
      const ele =document.getElementsByClassName("container")[0];
      ele.appendChild(li); 
    // creating a button and appending it to created li...
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "X";
      deleteBtn.id = "deleteBtn"
      li.appendChild(deleteBtn);
    // using onClick method to delete the parent element and therefore deleting the note...  
      deleteBtn.onclick = function() {
        this.parentElement.remove();
        }
    }
})