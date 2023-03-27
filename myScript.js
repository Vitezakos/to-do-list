function addNewListing() {
  let li = document.createElement("li");
  const myInput = document.getElementById("input");
  const inputValue = myInput.value;
  const newListing = document.createTextNode(inputValue);
  li.appendChild(newListing);
  document.getElementById("list").appendChild(li);
  const button = document.createElement("button");
  const remove = document.createTextNode("Remove");
  button.className = "delete";
  button.appendChild(remove);
  li.appendChild(button);

  button.onclick = function () {
    var div = this.parentElement;
    div.remove();
  };
}

const input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button").click();
  }
});
