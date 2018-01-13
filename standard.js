$(document).ready(function(){
	$('.btn, .project').click(function(){
		var attr = this.getAttribute("data-link");
		if (typeof attr !== typeof undefined && attr !== false) {
			window.location.href = attr;
		}
	});
});