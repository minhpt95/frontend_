
// var Header = document.getElementById("header");
var stickyNav = $('body').offset().top;
window.onscroll = function() {
	NavFixed();
};
function NavFixed() {
  	if (window.pageYOffset > stickyNav) {
  		$('header').css({
  			'background-color' : "#0a318e99",
  			'height' : '60px'
  		})
  		$('header').find('.logo_image').css({
  			'width' : '120px'
  		})
  	} else {
  		$('header').css({
  			'background-color' : "#0a318e00",
  			'height' : '100px'
  		})
  		$('header').find('.logo_image').css({
  			'width' : '150px'
  		})
  	}
}


$('.open_nav').on('click', function(){
	$('.navigation_wrapper').toggleClass('is-open')
})
$('.close_nav').on('click', function(){
	$('.navigation_wrapper').toggleClass('is-open')
})









