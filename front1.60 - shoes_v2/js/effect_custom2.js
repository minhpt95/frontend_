
var Header = document.getElementById("header");
var stickyNav = Header.offsetTop;
window.onscroll = function() {
	NavFixed();
};
function NavFixed() {
  	if (window.pageYOffset > stickyNav) {
    	Header.style.backgroundColor = "rgba(255, 255, 255, 1)";
  	} else {
    	Header.style.backgroundColor = "rgba(255, 255, 255, 1)";
  	}
}

$("#openSearch").click(function(){
	$(".search_form").toggleClass("r-0");	
});
$("#open_nav").click(function(){
	$("#ul").toggleClass("_20px");	
	$("#bound-close").toggleClass("z-3");	
});
$("#bound-close").click(function(){
	$("#ul").toggleClass("_20px");	
	$("#bound-close").toggleClass("z-3");	
});

// $(".search_form").toggleClass("r-0");


