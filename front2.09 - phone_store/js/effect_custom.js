// Fixed Header
var stickyNav = $('body').offset().top;
window.onscroll = function() {
    NavFixed();
};

function NavFixed() {
    if (window.pageYOffset > stickyNav) {
        $('header').css({
            'background-color': "#fff",
            'height': '60px'
        })
    } else {
        $('header').css({
            'background-color': "#ffffff00",
            'height': '80px'
        })
    }
}

$('.header_search_open').on('click', function(){
	$('.header_search').toggleClass('is-open')
})
$('.header_nav_open').on('click', function(){
	$('.nav').addClass('is-open')
})
$('.close_nav').on('click', function(){
	$('.nav').removeClass('is-open')
})








