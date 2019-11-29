
var owl = $('.owl-carousel');
owl.owlCarousel({
	// margin: 10,
	loop: true,
	responsive: {
	  	0: {
	    	items: 1
	  	},
	},
    autoplay:true,
    autoplayTimeout:5000,
})
$(document).ready(function(){
  	$('.owl-carousel').owlCarousel();
});

var Header = document.getElementById("header_nav");
var stickyNav = Header.offsetTop;
window.onscroll = function() {
	NavFixed();
};
function NavFixed() {
  	if (window.pageYOffset > stickyNav) {
    	Header.style.height = '90px';
    	Header.style.backgroundColor = "rgba(0, 0, 0, .5)";
  	} else {
    	Header.style.height = '100px';
    	Header.style.backgroundColor = "rgba(0, 0, 0, 0)";
  	}
}