$('.menu-toggle').on('click', function(){
	$('.I-sidebar').toggleClass('is-open')
})
$('.close_nav').on('click', function(){
	$('.I-sidebar').toggleClass('is-open')
})
$('.open_submenu').on('click', function(){
	if ($(this).parent().hasClass('is-open')) {
		$(this).parent().removeClass('is-open')
	}else{
		$(this).parent().parent().find('.sub_menu').removeClass('is-open')
		$(this).parent().addClass('is-open')
	}
})

var stickyNav = $('body').offset().top;
window.onscroll = function() {
    NavFixed();
};

function NavFixed() {
    if (window.pageYOffset > stickyNav) {
        $('header').css({
            'background-color': "#3c3c3cab",
        })
    } else {
        $('header').css({
            'background-color': "#ffffff00",
        })
    }
}
$('.I-stone').find('h3').on('click', function(){
		console.log(data)
	var father = $('.I-stone')
	father.find('.stone_content').find('.stone_item').removeClass('is-select')
	var data = $(this).attr('data-toggle')

	father.find('.stone_content').find('.stone_item').each(function( index ) {
		if ($(this).attr('data-category') == data) {
			$(this).addClass('is-select')
		}
	})
		
})










