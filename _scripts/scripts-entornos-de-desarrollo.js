
$(document).ready(function() {

/* ////////////// OUR TEAM */

$(".entornos-de-desarrollo-item").not($("#entornos-de-desarrollo-item-Kelly")).hide();

	$("#entornos-de-desarrollo-navi a").click(function(){
		$("#entornos-de-desarrollo-navi a").removeClass("selected");
		$(this).addClass("selected");
		var objid = $(this).attr('id').substring(33);
		alert(objid);
		$(".entornos-de-desarrollo-item").hide(0);
		$("#entornos-de-desarrollo-item-"+objid).fadeIn(300);
	});

}); //End of JQuery Functions.
