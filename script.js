window.onload = function () {
  var addJobBtn = document.getElementById("addJobBtn");
  addJobBtn.onclick = handleAdd;
};

function handleAdd() {
  // For Job Year
  var year = document.getElementById("yearInput").value;

  var newYearText = document.createTextNode(year);
  var p = document.createElement("p");
  var expLeft = document.createElement("div");
  expLeft.className = "col-4";
  var expRow = document.createElement("div");
  expRow.className = "row";
  var experience = document.getElementById("experience");

  p.appendChild(newYearText);
  expLeft.appendChild(p);
  expRow.appendChild(expLeft);
  experience.appendChild(expRow);

  //   For Job Title
  var title = document.getElementById("titleInput").value;

  var newTitleText = document.createTextNode(title);
  var h4 = document.createElement("h4");
  var expRight = document.createElement("div");
  expRight.className = "col-8";

  h4.appendChild(newTitleText);
  expRight.appendChild(h4);
  expRow.appendChild(expRight);
  experience.appendChild(expRow);

  //   Company Name
  var company = document.getElementById("companyInput").value;

  var newCompanyText = document.createTextNode(company);
  var h6 = document.createElement("h6");

  h6.appendChild(newCompanyText);
  expRight.appendChild(h6);
  expRow.appendChild(expRight);
  experience.appendChild(expRow);

  //   Description
  var des = document.getElementById("desInput").value;

  var newDesText = document.createTextNode(des);
  var p = document.createElement("p");

  p.appendChild(newDesText);
  expRight.appendChild(p);
  expRow.appendChild(expRight);
  experience.appendChild(expRow);

  //   Adding Delet Button
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger my-3";
  deleteBtn.innerHTML = "Delete Job";
  deleteBtn.onclick = handleDelete;

  expRight.appendChild(deleteBtn);
  expRow.appendChild(expRight);
  experience.appendChild(expRow);
}

function handleDelete(e) {
  var tag = e.target;
  var col = tag.parentNode;
  var row = col.parentNode;
  row.parentNode.removeChild(row);
}
