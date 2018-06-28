module.exports = function(opt, call) {
	var t = this;

	t.options = ((call!==null&&opt!==null)?opt:{});
	if(!t.options.title) t.options.title = document.title;
	if(!t.options.placeholder) t.options.placeholder = "enter your value...";
	if(!t.options.inputType) t.options.inputType = "text";
	if(!t.options.buttonTheme) t.options.buttonTheme = "primary";
	if(!t.options.buttonText) t.options.buttonText = "submit";

	t.submitted = false;

	t.submit = function() {
		t.submitted = true;
		t.close();
	};

	t.close = function() {
		$(".bs-prompt-modal").modal("hide");
	};

	t.open = function() {
		$(".bs-prompt-modal").modal("show");
	};

	t.remove = function() {
		$(".bs-prompt-modal").remove();
	};

	$("body").append(
		"<div class=\"modal fade bs-prompt-modal\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><h4 class=\"modal-title\">"+t.options.title+"</h4><button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button></div><div class=\"modal-body\"><input class=\"form-control bs-prompt-input\" type=\""+t.options.inputType+"\" placeholder=\""+t.options.placeholder+"\"></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-primary bs-prompt-submit\" data-dismiss=\"modal\">"+t.options.buttonText+"</button></div></div>"
	);

	$(".bs-prompt-input").keyup(function(e) {
		if(e.which === 13) t.submit();
	});
	
	$(".bs-prompt-submit").click(t.submit);

	$(".bs-prompt-modal").on("hidden.bs.modal", function() {
		call((t.submitted ? $(".bs-prompt-input").val() : null));
		t.remove();
	});

	return t;
};
