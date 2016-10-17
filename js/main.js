$(document).ready(function() {

//alert("hey!");

	$("#box-area h4").click(function() {
		$(this).next().slideToggle();
		if ($(this).find("i").hasClass("fa-caret-right")) {
			$(this).find("i").removeClass("fa-caret-right").addClass("fa-caret-down");
		} else {
			$(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-right");
		} // endif
		}); // click


	var showcaseHeight, headlineHeight, showcaseTop;

	function resizeShowcase() {
		showcaseHeight = $(".showcase").height();
		headlineHeight = $(".headline").height();
		showcaseTop = (showcaseHeight - headlineHeight)/2;
			$(".headline").css({
				"top" : showcaseTop
			}); //css
	}

	$(window).resize(function () {
		location.reload();
		resizeShowcase();
	}); //resize

resizeShowcase();


	


}); //ready