
$(document).ready(function() {

/* ////////////// OUR TEAM */

$(".bases-de-datos-item").not($("#bases-de-datos-item-SQLite")).hide();

	$("#bases-de-datos-navi a").click(function(){
		$("#bases-de-datos-navi a").removeClass("selected");
		$(this).addClass("selected");
		var objid = $(this).attr('id').substring(25);
		$(".bases-de-datos-item").hide(0);
		$("#bases-de-datos-item-"+objid).fadeIn(300);
	});

}); //End of JQuery Functions.
