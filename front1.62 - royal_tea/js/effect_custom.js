
$('.open_nav').on('click', function(){
	$('.nav_bar').toggleClass('R-0');
})



$('a.smooth_scroll').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 700);
});























