
var Header = document.getElementById("header");
var stickyNav = Header.offsetTop;
window.onscroll = function() {
	NavFixed();
};
function NavFixed() {
  	if (window.pageYOffset > stickyNav) {
    	Header.style.backgroundColor = "rgba(255, 255, 255, 1)";
  	} else {
    	Header.style.backgroundColor = "rgba(255, 255, 255, .5)";
  	}
}

$("#openSearch").click(function(){
	$(".search_form").toggleClass("r-0");	
});
// $(".search_form").toggleClass("r-0");


