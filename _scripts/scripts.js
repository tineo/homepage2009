
$(document).ready(function() {


/* ////////////// BACKGROUND ROTATE */
/*
function bgRotate(){
//	setInterval('$("#bg1").fadeOut(1000);$("#bg2").fadeIn(1000);',3000);
	//Set the opacity of all images to 0
	$('ul#bg-rotator li').css({opacity: 0.0});
	
	//Get the first image and display it (gets set to full opacity)
	$('ul#bg-rotator li:first').css({opacity: 1.0});
		
	//Call the bg-rotator function to run the slideshow, 6000 = change to next image after 6 seconds
	setInterval(rotate(), 2000);
}


function rotate() {	

	//Get the first image
	var current = ($('ul#bg-rotator li.show')?  $('ul#bg-rotator li.show') : $('ul#bg-rotator li:first'));

	//Get next image, when it reaches the end, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('ul#bg-rotator li:first') :current.next()) : $('ul#bg-rotator li:first'));	

	//Set the fade in effect for the next image, the show class has higher z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);
	alert(next.attr("class"));
	//Hide the current image
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
	
};

//Running
bgRotate();

*/


/* ////////////// SET UP THE PAGE HEIGHT */
$("body").css("padding-bottom", eval($(window).height()*0.7));




/* ////////////// PAGE CALL FUNCTIONS  */

if(window.location.hash){
	if(window.location.hash == "#get-directions"){
		$("#get-directions-content").load("_includes/content-directions.html", function(){
			$("a.get-directions").hide();
			$("a.hide-directions").show();
			$.scrollTo($("#get-directions-content").offset().top-290, 1000, {easing:'easeInOut'} );
			$("#navi-top a.contact").addClass("selected");
		 });
	}else if(
					 window.location.hash == "#mi-trabajo" || 
					 window.location.hash == "#tecnologias" || 
					 window.location.hash == "#about-us" || 
					 window.location.hash == "#resources"
					 ){
//		$.scrollTo($("#page"));
		$.scrollTo($(window.location.hash+"-obj").offset().top-70, 1000, {easing:'easeInOut'} );
		var objName = window.location.hash.substring(1) ;
		$("#navi-top a." + objName).addClass("selected");
	}else if(
					window.location.hash == "#portafolio" || 
					window.location.hash == "#our-clients" || 
					window.location.hash == "#patrones-de-diseno" || 
					window.location.hash == "#lenguajes-de-programacion" || 
					window.location.hash == "#bases-de-datos" || 
					window.location.hash == "#entornos-de-desarrollo" || 
					window.location.hash == "#datos-personales" || 
					window.location.hash == "#our-approach" || 
					window.location.hash == "#mi-blog" || 
					window.location.hash == "#news" || 
					window.location.hash == "#jobs" || 
					window.location.hash == "#book-and-video" || 
					window.location.hash == "#downloads" || 
					window.location.hash == "#links" || 
					window.location.hash == "#contact" 
					){
		var objName = window.location.hash.substring(1) ;
		$("#"+objName+" .contents").hide();
		$("#"+objName+"-obj .title-link a").addClass("selectedtitle");
		$("#"+objName+"-obj .contents").load("_includes/content-"+objName+".html", function(){
			$("#"+objName+"-obj .contents").show("blind", 300);
			$.scrollTo($("#"+objName+"-obj").offset().top-70, 1000, {easing:'easeInOut'} );
//			$("#navi-top a."+menuName).addClass("selected");
		});
	}
}

/* ////////////// IE6 SCROLL FOLLOW FOR NAVI */
/*
$("#IE6 #header").scrollFollow({
    speed: 100,
    offset: 100,
		easing: 'linear'
   });
*/
//http://kitchen.net-perspective.com/open-source/scroll-follow/


/* ////////////// SCROLL*/
//$(window)._scrollable();

$("#header a#logo").click(function(){
	$.scrollTo($("#page").offset().top-70, 1000, {easing:'easeInOut'} );
	$("#navi-top a").removeClass("selected");
	$(this).addClass("selected");
	$(".title-link a").removeClass("selected");
});

	/* CORE FUNCTION*/
	function scrollToMenu(menuName){
		$.scrollTo($("#"+menuName+"-obj").offset().top-70, 1000, {easing:'easeInOut'} );
		$("#navi-top a").removeClass("selected");
		$("a."+menuName).addClass("selected");
		$(".title-link a").removeClass("selected");
	}

$("#navi-top a.mi-trabajo").click(function(){scrollToMenu("mi-trabajo")});
$("#navi-top a.tecnologias").click(function(){scrollToMenu("tecnologias")});
$("#navi-top a.about-us").click(function(){scrollToMenu("about-us")});
$("#navi-top a.resources").click(function(){scrollToMenu("resources")});

$("#navi-top a.contact").click(function(){
	$(".title-link a").removeClass("selectedtitle");
	scrollToMenu("contact");
	$("#contact-obj-link a").addClass("selectedtitle");
});
$("#contact-obj-link a").click(function(){
	$(".title-link a").removeClass("selectedtitle");
	scrollToMenu("contact");
	$("#contact-obj-link a").addClass("selectedtitle") 
});

/* ////////////// TITLE LINK TREATMENT */

//	$(".title-link a.selectedtitle").hide();	
//	$(".title-link a.not").hide();
	$(".contents").hide();
	
	/* CORE FUNCTION*/
	function toggleMenuOurServices(objName,menuName){
		var obj = "#"+objName+"-obj";
		$(".title-link a").not($(obj+" .title-link a")).removeClass("selectedtitle");
		if(!$(obj+" .title-link a").hasClass("selectedtitle") && $(obj+" .contents").is(':hidden')){
			$(obj+" .title-link a").addClass("selectedtitle");
		}else{
			$(obj+" .title-link a").removeClass("selectedtitle")
		};
		if($(obj+" .contents").is(':hidden')){
			$(obj+" .contents").load("_includes/content-"+objName+".html", function(){
				$(obj+" .contents").show('blind', 300);
				$.scrollTo($(obj).offset().top-70, 1000, {easing:'easeInOut'} );
				$("#navi-top a").removeClass("selected");
				$("#navi-top a."+menuName).addClass("selected");
		 });
		}else{
			$(obj+" .contents").hide('blind', 300);
		}
	}


/// v4 
/*
	function toggleMenuOurServices(objName,menuName){
		var obj = "#"+objName+"-obj";
//		$(".title-link a").not($(obj+" .title-link a")).removeClass("selectedtitle");
		$(".title-link a").not($(obj+" .title-link a")).removeClass("selectedtitle");
		if(!$(obj+" .title-link a").hasClass("selectedtitle") && !$(obj+" .contents").is(':hidden') && $(obj+" .contents").html() == ""){
			$(obj+" .title-link a").addClass("selectedtitle");
			$(obj+" .contents").load("_includes/content-"+objName+".html", function(){
				$(obj+" .contents .contents-innerHTML").show('blind', 300);
				$.scrollTo($(obj).offset().top-70, 1000, {easing:'easeInOut'} );
				$("#navi-top a").removeClass("selected");
				$("#navi-top a."+menuName).addClass("selected");
			});
		}else if($(obj+" .title-link a").hasClass("selectedtitle") && !$(obj+" .contents").is(':hidden')){
			$(obj+" .title-link a").removeClass("selectedtitle");
			$(obj+" .contents").hide('blind', 300);
		}else if(!$(obj+" .title-link a").hasClass("selectedtitle") && $(obj+" .contents").is(':hidden')){
			$(obj+" .title-link a").addClass("selectedtitle");
			$(obj+" .contents").show('blind', 300);
			$.scrollTo($(obj).offset().top-70, 1000, {easing:'easeInOut'} );
		}else if(!$(obj+" .title-link a").hasClass("selectedtitle") && !$(obj+" .contents").is(':hidden') && !($(obj+" .contents").html() == "")){
			$(obj+" .title-link a").addClass("selectedtitle");
			$.scrollTo($(obj).offset().top-70, 1000, {easing:'easeInOut'} );
		}
	}

*/



//	$("#portafolio-obj .title-link a").not($("a.selectedtitle")).click(function(){toggleMenuOurServices("portafolio","mi-trabajo")});
	$("#portafolio-obj .title-link a").click(function(){toggleMenuOurServices("portafolio","mi-trabajo")});
	$("#our-clients-obj .title-link a").click(function(){toggleMenuOurServices("our-clients","mi-trabajo")});

	$("#patrones-de-diseno-obj .title-link a").click(function(){toggleMenuOurServices("patrones-de-diseno","tecnologias")});
	$("#lenguajes-de-programacion-obj .title-link a").click(function(){toggleMenuOurServices("lenguajes-de-programacion","tecnologias")});
	$("#bases-de-datos-obj .title-link a").click(function(){toggleMenuOurServices("bases-de-datos","tecnologias")});
	$("#entornos-de-desarrollo-obj .title-link a").click(function(){toggleMenuOurServices("entornos-de-desarrollo","tecnologias")});

	$("#datos-personales-obj .title-link a").click(function(){toggleMenuOurServices("datos-personales","about-us")});
	$("#mi-blog-obj .title-link a").click(function(){toggleMenuOurServices("mi-blog","about-us")});
	$("#news-obj .title-link a").click(function(){toggleMenuOurServices("news","about-us")});
	$("#jobs-obj .title-link a").click(function(){toggleMenuOurServices("jobs","about-us")});

	$("#book-and-video-obj .title-link a").click(function(){toggleMenuOurServices("book-and-video","resources")});
	$("#downloads-obj .title-link a").click(function(){toggleMenuOurServices("downloads","resources")});
	$("#links-obj .title-link a").click(function(){toggleMenuOurServices("links","resources")});




/* ////////////// GET DIRECTIONS */
	$("a.get-directions").click(function(){
		$("#get-directions-content").show('blind', 300);
		$(this).hide();
		$("a.hide-directions").show()
		$("#get-directions-content").load("_includes/content-directions.html");
		$.scrollTo($("a.get-directions").offset().top+200, 1000, {easing:'easeInOut'} );
	});

	$("a.hide-directions").click(function(){
		$("#get-directions-content").hide('blind', 300);
		$(this).hide();
		$("a.get-directions").show()
	});



}); //End of JQuery Functions.