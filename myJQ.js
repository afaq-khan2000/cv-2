$(function () {
  $("#addJobBtn").click(handleAdd);
  $("div.col-8").on("click","button.btn-danger",handleDelete);
});

function handleAdd() {
  var newYear = $("#yearInput").val();
  var newTitle = $("#titleInput").val();
  var newCompany = $("#companyInput").val();
  var newDes = $("#desInput").val();

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

function handleDelete(){
    $(this.$(div.expRow)).remove();
}