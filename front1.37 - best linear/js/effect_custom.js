
// var open_contact = document.getElementById("open_contact");
// var contact_us = document.getElementById("contact_us");
// // var bound_open = document.getElementById("bound_open");
// var close_contact = document.getElementById("close_contact");


// // bound_open.addEventListener("click", openContact);
// open_contact.addEventListener("click", openContact);
// close_contact.addEventListener("click", openContact);

// var numContact = 0;
// function openContact() {
//     if(numContact == 0){
//         contact_us.style.right = "0";
//         // bound_open.style.zIndex = "3";
//         // bound_open.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
//         numContact = 1;
//     }else{
//         contact_us.style.right = "-100%";
//         // bound_open.style.zIndex = "-1";
//         // bound_open.style.backgroundColor = "rgba(0, 0, 0, 0)"
//         numContact = 0;
//     }
// }
$(document).ready(function(){

    $('#open_contact').click(function(){
        $('#contact_us').toggleClass('contact_active');
        $('#bound_open').toggleClass('bound_active');
    });
    $('#close_contact').click(function(){
        $('#contact_us').toggleClass('contact_active');
        $('#bound_open').toggleClass('bound_active');
    });
    $('#bound_open').click(function(){
        $('#contact_us').toggleClass('contact_active');
        $('#bound_open').toggleClass('bound_active');
    });

    $('#button_nav').click(function(){
        $('#nav').toggleClass('active');
    });
    $('#button_close_nav').click(function(){
        $('#nav').toggleClass('active');
    });


    
})

var Header = document.getElementById("header");
var stickyNav = Header.offsetTop;

window.onscroll = function() {
	NavFixed();
};

function NavFixed() {
  	if (window.pageYOffset > stickyNav) {
    	Header.style.height = '75px';
    	Header.style.backgroundColor = "rgba(255, 255, 255, 1)";
  	} else {
    	Header.style.height = '105px';
    	Header.style.backgroundColor = "rgba(255, 255, 255, 0)";
  	}
}