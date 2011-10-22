// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	$("a.programs").hover(function() {
		$("ul#sub-nav").css("display","block");
		$("a.programs").css("background", "#efefef");},
		
		function() {
		$("ul#sub-nav").css("display","none");
		$("a.programs").css("background", "none");
	});
	
	$("ul#sub-nav").hover(function() {
		$("ul#sub-nav").css("display","block");
		$("a.programs").css("background", "#efefef");},
		
		function() {
		$("ul#sub-nav").css("display","none");
		$("a.programs").css("background", "none");
	});
	
	
});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/