$(function () {
  $("#addJobBtn").click(handleAdd);
  $("div.experience").on("click", "button.btn-danger", handleDelete);
});

function handleAdd() {
  var newYear = $("#yearInput").val();
  var newTitle = $("#titleInput").val();
  var newCompany = $("#companyInput").val();
  var newDes = $("#desInput").val();

  if (!newYear) {
    $("#yearInput").addClass("error");
    return;
  }
  
  if (!newTitle) {
    $("#titleInput").addClass("error");
    return;
  }
  if (!newCompany) {
    $("#companyInput").addClass("error");
    return;
  }
  if (!newDes) {
    $("#desInput").addClass("error");
    return;
  }

  $("#yearInput").removeClass("error");
  $("#yearInput").val("");
  $("#titleInput").removeClass("error");
  $("#titleInput").val("");
  $("#companyInput").removeClass("error");
  $("#companyInput").val("");
  $("#desInput").removeClass("error");
  $("#desInput").val("");

  $("#experience").append(`<div class="row expRow">
  <div class="col-4">
    <p>${newYear}</p>
  </div>
  <div class="col-8">
    <h4>${newTitle}</h4>
    <h6>${newCompany}</h6>
    <p>
      ${newDes}
    </p>
    <button
      type="button"
      onclick="handleDelete(event)"
      class="btn btn-danger my-3"
    >
      Delete Job
    </button>
  </div>
</div>`);
}

function handleDelete() {
  $(this).parent().parent().remove();
}
