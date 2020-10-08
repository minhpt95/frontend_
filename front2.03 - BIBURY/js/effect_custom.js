// Fixed Header
var stickyNav = $('body').offset().top;
window.onscroll = function() {
    NavFixed();
};

function NavFixed() {
    function NavFixed() {
        let marginTop = window.pageYOffset > stickyNav ? "0" : "230px";

        $('.modal-dialog.modal-dialog-search.area.modal-dialog-centered').css({
            'margin-top': marginTop,
        })
    }
    // if (window.pageYOffset > stickyNav) {
    //     $('header').css({
    //         'background-color': "#fff",
    //         'height': '60px'
    //     })
    // } else {
    //     $('header').css({
    //         'background-color': "#ffffff00",
    //         'height': '80px'
    //     })
    // }
}

// Open Search Form in Header
$('.open_search_form').on('click', function(){
    $(this).parent().find('.search_form').toggleClass('is-open')
    $(this).find('i').toggleClass('fa-search')
    $(this).find('i').toggleClass('fa-times')
})

// Open Cart Form in Header
$('.open_cart_form').on('click', function(){
    $(this).parent().find('.cart_form').toggleClass('is-open')
})

// Remove Cart Item
$('.cart_remove').on('click', function(){
    $(this).parent().remove()
})

// Open sub_navigarion Responsive
$('.open_sub').on('click', function(){
    $(this).parent().toggleClass('is-open')
    $(this).find('i').toggleClass('fa-sort-down')
    $(this).find('i').toggleClass('fa-sort-up')
})
// Open navigarion Responsive
$('.open_navigation').on('click', function(){
    $(this).parent().find('.main_navigation').toggleClass('is-open')
})

$('.listItem_select').find('li').on('click', function(){
    var index = $(this).index()
    console.log(index)
    $(this).parent().find('li').removeClass('is-select')
    $(this).addClass('is-select')
    $(this).parent().parent().parent().find('.listItem').removeClass('is-select')
    $(this).parent().parent().parent().find('.listItem').eq(index).addClass('is-select')
})


