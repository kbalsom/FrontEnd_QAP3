// Written by: Kara Balsom
// Date Written: July 18, 2022
// File Name: Kara_QAP3.zip

var form = document.querySelector("#todo-form");

form.addEventListener("submit", function (e) {
  var task = document.querySelector("#task").value;
  var date = document.querySelector("#date").value;
  var category = document.querySelector("#category").value;
  var priority = document.querySelector("#priority").value;

  addTaskToList(task, date, category, priority);
  clearFields();
  e.preventDefault();
});

function addTaskToList(t, d, c, p) {
  if (t === "" || d === "" || c === "" || p === "") {
    showAlert("Field Cannot be Empty - Please Re-Enter.", "error");
  } else {
    var row = document.createElement("div");
    row.innerHTML = `<td>Task: ${t.toUpperCase()}</td></br><td>Date Due: ${d}</td></br><td>Category: ${c}</td></br><td>Priority Level: ${p}</td></br><td><button class="pending">Pending</button><button class="done">Done</button><button class="delete">Delete</button></td>`;
    document.querySelector("#tbody").appendChild(row);
    showAlert("Task Added to List.", "success");
  }
}

function clearFields() {
  document.querySelector("#task").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#category").value = "";
  document.querySelector("#priority").value = "";
}

function showAlert(message, className) {
  var notification = document.querySelector("#notification");

  var div = document.createElement("div");
  div.innerText = message;
  div.className = className;
  div.id = "temp";
  notification.appendChild(div);

  setTimeout(function () {
    document.querySelector("#temp").remove();
  }, 3000);
}

document.querySelector("#tbody").addEventListener("click", function (e) {
  buttonTask(e.target);
  e.preventDefault();
  priority();
});

function buttonTask(elem) {
  if (elem.className === "delete") {
    elem.parentElement.remove();
    showAlert("Task Deleted.", "success");
  } else if (elem.className === "pending") {
    elem.parentElement.style.color = "orange";
    showAlert("Task Pending", "success");
  } else if (elem.className === "done") {
    elem.parentElement.style = "text-decoration: line-through";
    showAlert("Task Completed", "success");
  }
}
