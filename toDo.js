// Create a to-do list and it must accomplish the following things:

// Show an unordered list of to-do items
// Show an input to enter a new to-do
// Show a button to add a to-do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

var listItems = document.querySelectorAll("#unorderedList li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", removeListItem);
}

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("itemInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
      document.getElementById("unorderedList").appendChild(li);
    li.addEventListener("click", removeListItem);
    document.getElementById("itemInput").value = "";
}

function removeListItem() {
    this.removeEventListener("click", removeListItem);
    this.parentNode.removeChild(this);
  }
