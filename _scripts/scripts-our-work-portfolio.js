
$(document).ready(function() {

/*
$("#cs-item-screen-1 .scrollable .items").load("_includes/portfolio-slides/haikara.html");
$("#cs-item-screen-2 .scrollable .items").load("_includes/portfolio-slides/brocade.html");
$("#cs-item-screen-3 .scrollable .items").load("_includes/portfolio-slides/vmware.html");
$("#cs-item-screen-4 .scrollable .items").load("_includes/portfolio-slides/adobecatalyst.html");
$("#cs-item-screen-5 .scrollable .items").load("_includes/portfolio-slides/rexray.html");
$("#cs-item-screen-6 .scrollable .items").load("_includes/portfolio-slides/communityfriends.html");
$("#cs-item-screen-7 .scrollable .items").load("_includes/portfolio-slides/nlm.html");
$("#cs-item-screen-8 .scrollable .items").load("_includes/portfolio-slides/vendio.html");
$("#cs-item-screen-9 .scrollable .items").load("_includes/portfolio-slides/altiuspar.html");
$("#cs-item-screen-10 .scrollable .items").load("_includes/portfolio-slides/wherify.html");
$("#cs-item-screen-11 .scrollable .items").load("_includes/portfolio-slides/epson.html");
$("#cs-item-screen-12 .scrollable .items").load("_includes/portfolio-slides/marchofdimes.html");
*/



$("#cs-item-screen-1 .scrollable .items").load("_includes/portfolio-slides/haikara.html", function(){
	$("#cs-item-screen-2 .scrollable .items").load("_includes/portfolio-slides/brocade.html", function(){
		$("#cs-item-screen-3 .scrollable .items").load("_includes/portfolio-slides/vmware.html", function(){
			$("#cs-item-screen-4 .scrollable .items").load("_includes/portfolio-slides/adobecatalyst.html", function(){
				$("#cs-item-screen-5 .scrollable .items").load("_includes/portfolio-slides/rexray.html", function(){
					$("#cs-item-screen-6 .scrollable .items").load("_includes/portfolio-slides/communityfriends.html", function(){
						$("#cs-item-screen-7 .scrollable .items").load("_includes/portfolio-slides/nlm.html", function(){
							$("#cs-item-screen-8 .scrollable .items").load("_includes/portfolio-slides/vendio.html", function(){
								$("#cs-item-screen-9 .scrollable .items").load("_includes/portfolio-slides/altiuspar.html", function(){
									$("#cs-item-screen-10 .scrollable .items").load("_includes/portfolio-slides/wherify.html", function(){
										$("#cs-item-screen-11 .scrollable .items").load("_includes/portfolio-slides/epson.html", function(){
											$("#cs-item-screen-12 .scrollable .items").load("_includes/portfolio-slides/marchofdimes.html");
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});


	$(".case-study-item a").mouseover(function(){
		$(this).addClass("hover");
		if($("#IE6").length == 0){ // Opacy effect for non-IE6 browsers.
			$(this).children(".cs-info").css('opacity' , '0');
			$(this).children(".cs-info").animate({
				opacity: 0.80
			},250)
		}else{
//			$(this).children(".cs-info").css('background' , '#FFF');
//			$(this).children(".cs-info").animate({
//				'background' : '#111'
//			},250)
		}
	});
	$(".case-study-item a").mouseout(function(){
		$(this).removeClass("hover");
	});


	
	$(".project-images a.prev").mouseover(function(){
		$(this).addClass("hover");
	});
	$(".project-images a.prev").mouseout(function(){
		$(this).removeClass("hover");
	});

	$(".project-images a.next").mouseover(function(){
		$(this).addClass("hover");
	});
	$(".project-images a.next").mouseout(function(){
		$(this).removeClass("hover");
	});


	$(".case-study-item a.thumb").click(function(){
			var objNumber = $(this).parent().attr('id').substring(8) ;
		$("#cs-item-screen-" + objNumber).show("blind", { direction: "right" },  500);
	});


	/* Close */
	$(".screen a.close").click(function(){
		$(this).offsetParent(".screen").hide("blind", { direction: "right" },  500);
	});


	/* Next : Fade*/
	$(".tools-top a.next").click(function(){
		var objNumber = parseFloat($(this).offsetParent(".screen").attr('id').substring(15));
		var nextNumber = objNumber + 1;
		$(".screen").css("z-index","1000");
		$("#cs-item-screen-"+objNumber).css("z-index","1100");
		$("#cs-item-screen-"+nextNumber).show(0, function(){
			$("#cs-item-screen-"+objNumber).fadeOut(500);
		});
	});
	/* prev : Fade*/
	$(".tools-top a.prev").click(function(){
		var objNumber = parseFloat($(this).offsetParent(".screen").attr('id').substring(15));
		var prevNumber = objNumber - 1;
		$(".screen").css("z-index","1000");
		$("#cs-item-screen-"+objNumber).css("z-index","1100");
		$("#cs-item-screen-"+prevNumber).show(0, function(){
			$("#cs-item-screen-"+objNumber).fadeOut(500);
		});
	});






/* //////////////// SCROLLABLE11 */

$("div.scrollable").scrollable({ 
	size: 1, 
//	items: '#thumbs',   
//	hoverClass: 'hover' 
//	hoverClass: ''
	speed:700,
	easing: 'easeOutQuart'
});



}); //End of JQuery Functions.
