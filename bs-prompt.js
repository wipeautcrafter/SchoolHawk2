module.exports = function(t, o) {
  var s = this;
  return (
    (s.options = null !== o && null !== t ? t : {}),
    s.options.title || (s.options.title = document.title),
    s.options.placeholder || (s.options.placeholder = "enter your value..."),
    s.options.inputType || (s.options.inputType = "text"),
    s.options.buttonTheme || (s.options.buttonTheme = "primary"),
    s.options.buttonText || (s.options.buttonText = "submit"),
    (s.submitted = !1),
    (s.submit = function() {
      (s.submitted = !0), s.close();
    }),
    (s.close = function() {
      $(".bs-prompt-modal").modal("hide");
    }),
    (s.open = function() {
      $(".bs-prompt-modal").modal("show");
    }),
    (s.remove = function() {
      $(".bs-prompt-modal").remove();
    }),
    $("body").append(
      '<div class="modal fade bs-prompt-modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">' +
        s.options.title +
        '</h4><button type="button" class="close" data-dismiss="modal">&times;</button></div><div class="modal-body"><input class="form-control bs-prompt-input" type="' +
        s.options.inputType +
        '" placeholder="' +
        s.options.placeholder +
        '"></div><div class="modal-footer"><button type="button" class="btn btn-primary bs-prompt-submit" data-dismiss="modal">' +
        s.options.buttonText +
        "</button></div></div>"
    ),
    $(".bs-prompt-input").keyup(function(t) {
      13 === t.which && s.submit();
    }),
    $(".bs-prompt-submit").click(s.submit),
    $(".bs-prompt-modal").on("hidden.bs.modal", function() {
      o(s.submitted ? $(".bs-prompt-input").val() : null), s.remove();
    }),
    s
  );
};
