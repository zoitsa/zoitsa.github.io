$(document).ready(function() {

	if (window.location.hash) { 
        //bind to scroll function
        $(document).scroll( function() {
            var hash = window.location.hash
            var hashName = hash.substring(1, hash.length);
            var element;

            //if element has this id then scroll to it
            if ($(hash).length != 0) {
                element = $(hash);
            }
            //catch cases of links that use anchor name
            else if ($('a[name="' + hashName + '"]').length != 0)
            {
                //just use the first one in case there are multiples
                element = $('a[name="' + hashName + '"]:first');
            }

            //if we have a target then go to it
            if (element != undefined) {
                window.scrollTo(0, element.position().top);
            }
            //unbind the scroll event
            $(document).unbind("scroll");
        });
    }



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