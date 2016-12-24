
$(document).ready(function() {

/* ////////////// OUR TEAM */

$(".lenguajes-de-programacion-item").not($("#lenguajes-de-programacion-item-php")).hide();

	$("#lenguajes-de-programacion-navi a").click(function(){

		$("#lenguajes-de-programacion-navi a").removeClass("selected");
		$(this).addClass("selected");
		var objid = $(this).attr('id').substring(36);
		$(".lenguajes-de-programacion-item").hide(0);
		$("#lenguajes-de-programacion-item-"+objid).fadeIn(300);
	});

}); //End of JQuery Functions.
