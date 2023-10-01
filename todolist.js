var form = document.getElementById("form");
var addlist = document.getElementById("items");
form.addEventListener("submit", addItem);
addlist.addEventListener("click", removeItem);
var filter = document.getElementById("filter");
filter.addEventListener('keyup', filterItem);

function addItem(e) {
  e.preventDefault();
  inputValue = document.getElementById("ipt");
  inputValue2 = inputValue.value;
  list = document.createElement("li");
  list.appendChild(document.createTextNode(inputValue2));
  addlist.appendChild(list);
  btn = document.getElementById("btn");
  DeleteBtn = document.createElement("button");
  DeleteBtn.appendChild(document.createTextNode("Delete"));
  DeleteBtn.className = "delete";
  list.appendChild(DeleteBtn);
  DeleteBtn.style.background = "red";
  DeleteBtn.style.margin = "50px";
  DeleteBtn.style.display = "inline";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      addlist.removeChild(li);
    }
  }
}

function filterItem(e) {
  const text = e.target.value.toLowerCase();
  const items = addlist.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(text)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
