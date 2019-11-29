
// var Header = document.getElementById("menu");
// var stickyNav = Header.offsetTop;
// window.onscroll = function() {
// 	NavFixed();
// };
// function NavFixed() {
//   	if (window.pageYOffset > stickyNav) {
//     	Header.style.position = 'fixed';
//     	// Header.style.backgroundColor = "rgba(0, 0, 0, .5)";
//   	} else {
//     	// Header.style.height = '100px';
//     	// Header.style.backgroundColor = "rgba(0, 0, 0, 0)";
//   	}
// }

$("#open-menu").click(function(){
	$("#menu").toggleClass("block")
})