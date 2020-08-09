// var Header = document.getElementById("header");
var stickyNav = $('body').offset().top;
window.onscroll = function() {
    NavFixed();
};

function NavFixed() {
    if (window.pageYOffset > stickyNav) {
        $('header').css({
            'background-color': "#2b2b2b99",
            'height': '60px'
        })
        $('header').find('.logo_image').css({
            'width': '120px'
        })
        $('header').find('.logo_header').css({
            'opacity': '1'
        })
    } else {
        $('header').css({
            'background-color': "#2b2b2b00",
            'height': '100px'
        })
        $('header').find('.logo_image').css({
            'width': '150px'
        })
        $('header').find('.logo_header').css({
            'opacity': '0'
        })
    }
}


$('.open_nav').on('click', function() {
    $('.navigation_wrapper').toggleClass('is-open')
})
$('.close_nav').on('click', function() {
    $('.navigation_wrapper').toggleClass('is-open')
})

$('.item_wrapper').each(function() {
    var data = $(this).attr('data')
    for (var i = 0; i < 5; i++) {
        $(this).append(
            '<div class="wrapper_subimage">' +
            '    <div class="sub_image"> ' +
            '        <img src="' + data + '">' +
            '    </div>' +
            '</div>'
        )
    }
})


var totalItems = $('.item').length;
var currentIndex = $('div.item.active').index();
$('.index_carousel').html(currentIndex+3);
$('.count_carousel').html('/' + totalItems);
$('#myCarousel').on('slide.bs.carousel', function() {
    currentIndex = $('div.item.active').index();
    // console.log(currentIndex)
    $('.index_carousel').html(currentIndex+1);
});


$('.open_full').on('click', function(){
    if ($(this).parent().hasClass('is-open')) {
        $(this).parent().removeClass('is-open')
    }else{
        $('.content_wrapper').removeClass('is-open')
        $(this).parent().addClass('is-open')
    }
    // $(this).parent().toggleClass('is-open')
})