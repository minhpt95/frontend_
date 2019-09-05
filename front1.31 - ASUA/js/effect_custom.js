$(document).ready(function(){

    // For hidding and displaying sub-menu
    $('.sub_menu_title').click(function(){
        $(this).parent().find('.sub_menu').slideToggle();
    });

    // Clicking drawer button
    $('.home_menu').click(function(){
        $(this).toggleClass('active');
        $('.drawer_nav_wrapper').toggleClass('active');
        $('.drawer_bg').toggleClass('active');
    });
})


var open_menu             = document.getElementById('openmenu');
var next             = document.getElementById('next');
var back             = document.getElementById('back');
var drawer_bg       = document.getElementById('drawer_bg');
var body            = document.getElementById('body');

open_menu.addEventListener("click", openMenu);
// drawer_bg.addEventListener("click", openMenu);
var numMenu = 0;
function openMenu() {
    if(numMenu == 0){
        next.style.top = "100%";
        back.style.top = "0%";
        body.style.zIndex = -1;
        numMenu = 1;
    }else{
        next.style.top = "0";
        back.style.top = "-100%";
        body.style.zIndex = 0;
        numMenu = 0;
    }
}