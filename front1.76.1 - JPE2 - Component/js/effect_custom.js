if (screen.width < 769) {
    $('.header-respon_menu').on('click', function(){
        $('.menu-btn-image').toggleClass('is-active')
        $('.language-title-icon').removeClass('is-active')
        $('.language-nav').removeClass('is-active')
        $('.header-respon_navication').toggleClass('is-active')
    })
    $('.header-language').on('click', function(){
        $('.language-title-icon').toggleClass('is-active')
        $('.language-nav').toggleClass('is-active')
        $('.menu-btn-image').removeClass('is-active')
        $('.is-close').toggleClass('is-active')
        $('.header-respon_navication').removeClass('is-active')
    })
    
    $('.open-block').on('click', function(){
        $('.open-block').removeClass('is-selected');
        $('.information-block').removeClass('is-selected');
        $(this).addClass('is-selected');
        if ($('.open-info').hasClass('is-selected')) {
            $('.infor').addClass('is-selected');
        }
        if ($('.open-discount').hasClass('is-selected')) {
            $('.discount').addClass('is-selected');
        }
    })
    $('.detail-title').on('click', function(){
        if ($(this).parent().find('.detail-content').hasClass('is-selected')) {
            $('.detail-content').removeClass('is-selected')
            $(this).find('.respon-icon').toggleClass('is-active')
        }else{
            $('.detail-content').removeClass('is-selected')
            $('.respon-icon').removeClass('is-active')
            $('.respon-icon').addClass('is-active')
            $(this).find('.respon-icon').removeClass('is-active')
            $(this).parent().find('.detail-content').addClass('is-selected')
        }
    })
    $('.item-title').on('click', function(){
        if ($(this).parent().find('.item-content').hasClass('is-selected')) {
            $('.item-content').removeClass('is-selected')
            $(this).find('.content-icon').toggleClass('is-active')
        }else{
            $('.item-content').removeClass('is-selected')
            $('.content-icon').removeClass('is-active')
            $('.content-icon').addClass('is-active')
            $(this).find('.content-icon').removeClass('is-active')
            $(this).parent().find('.item-content').addClass('is-selected')
        }
    })
    
}
if (screen.width > 768) {
    $('.navication-search').on('click', function(){
        $('.searchform').toggleClass('is-active')
    })
}



$('.I-slider').find('.control-next').on('click', function(){
    $('.slider-carousel').trigger('next.owl.carousel');
})
$('.I-slider').find('.control-prev').on('click', function(){
    $('.slider-carousel').trigger('prev.owl.carousel');
})
$('.I-slider').find('.respon-next').on('click', function(){
    $('.slider-carousel').trigger('next.owl.carousel');
})
$('.I-slider').find('.respon-prev').on('click', function(){
    $('.slider-carousel').trigger('prev.owl.carousel');
})
$('.I-concert').find('.control-next').on('click', function(){
    $('.concert-carousel').trigger('next.owl.carousel');
})
$('.I-concert').find('.control-prev').on('click', function(){
    $('.concert-carousel').trigger('prev.owl.carousel');
})

$('.I-sponsor').find('.control-next').on('click', function(){
    $('.sponsor-carousel').trigger('next.owl.carousel');
})
$('.I-sponsor').find('.control-prev').on('click', function(){
    $('.sponsor-carousel').trigger('prev.owl.carousel');
})





$('.slider-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:60,
    nav:false,
    autoWidth: false,
    items:1,
    lazyLoad: true,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        600:{
            items:1,
            stagePadding: 0
        },
        800:{
            items:1,
            stagePadding: 0
        },
        1200:{
            items:1,
            stagePadding: 200
        }
    }
})

$('.concert-carousel').owlCarousel({
    loop:false,
    nav:false,
    items:1,
    lazyLoad: true,
    nav: false,
    responsive:{
        0:{
            items: 1,
            margin: 30,
            stagePadding: 0
        },
        200:{
            items: 1,
            margin: 30,
            stagePadding: 50
        },
        600:{
            items: 1,
            margin: 30,
            stagePadding: 100
        },
        800:{
            items: 1,
            margin: 30,
            stagePadding: 100
        },
        1200:{
            items: 4,
            margin:44,
            stagePadding: 0
        },
    }
})
$('.sponsor-carousel').owlCarousel({
    loop:false,
    margin:20,
    items:1,
    lazyLoad: true,
    nav:false,
    responsive:{
        0:{
            items:1,
            stagePadding: 0
        },
        200:{
            items:1,
            stagePadding: 50
        },
        600:{
            items:1,
            stagePadding: 100
        },
        800:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:4,
            stagePadding: 0
        },
    }
})










































































