
// For hidding and displaying sub-menu
$('.sub_menu_title').click(function(){
    $(this).parent().find('.sub_menu').slideToggle();
    $(this).parent().find('.fa-chevron-down').toggleClass('uppppppppppppp');
});

$("#openmenu").click(function(){
	$("#drawer_bg").toggleClass('active_menu');
	$("#drawer_nav_wrapper").toggleClass('active_menu');
	$("#back").toggleClass('up-100');
	$("#next").toggleClass('up100');
});
$("#drawer_bg").click(function(){
	$("#drawer_bg").toggleClass('active_menu');
	$("#drawer_nav_wrapper").toggleClass('active_menu');
	$("#back").toggleClass('up-100');
	$("#next").toggleClass('up100');
})