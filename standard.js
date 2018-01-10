$(document).ready(function(){
	$('.btn, .btn-grad, .project').click(function(){
		var link = this.getAttribute("data-link");
		window.location.href = link;
	});
});
