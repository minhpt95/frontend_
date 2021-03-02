var stickyNav = $('body').offset().top;
window.onscroll = function() {
    NavFixed();
};
function NavFixed() {
    let scroll = window.pageYOffset > stickyNav ? true : false;
    if (scroll) {
        $('header').addClass('is-scroll')
    }else{
        $('header').removeClass('is-scroll')
    }
}

$('.open_navbar').on('click', function(){
    $('body').addClass('nav-open')
})
$('.close_nav').on('click', function(){
    $('body').removeClass('nav-open')
})


