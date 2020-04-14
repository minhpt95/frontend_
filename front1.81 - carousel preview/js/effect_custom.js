
// (function( $ ){
//     $.fn.config = function(a) {
//         var index           = $(this).parent().parent().attr('index');
//         var padding         = $(this).parent().parent().attr('padding');
//         var margin          = - $(this).parent().parent().attr('padding');
//         var item_pecent     = 100 / $(this).parent().parent().attr('item');
//         var item_px         = item_pecent * $(this).parent().parent().parent().width() / 100;
//         var item_width      = ($(this).width() - margin*2) / $(this).parent().parent().attr('item');
//         var item_height     = $(this).find('.carousel-item').height();
//         var count_item      = $(this).find('.carousel-column').length;                      //số lượng item
//         var item_visible    = $(this).parent().parent().attr('item');
//         var row_width       = item_width*count_item;
//         console.log(index)
//         $(this).parent().css({
//             'height'        : item_height+ 'px'
//         })
//         $(this).css({
//             'margin-left'   : margin + 'px',
//             'margin-right'  : margin + 'px',
//             'height'        : item_height + 'px',
//             'width'         : row_width + 'px'
//         })
//         $(this).find('.carousel-column').css({
//             'padding-left'  : padding + 'px',
//             'padding-right' : padding + 'px',
//             'width'         : item_px + 'px'
//         })
//         for (var i = 0; i < count_item; i++) {
//             var left = item_width * i;
//             $(this).find('.carousel-column').eq(i).css({
//                 'left': left + 'px',
//             })
//         }
//         // $(this).find('.carousel-column').eq(index).addClass('is-active')
//         config_index($(this), index)
//     };   
//     $.fn.prev_list = function() {
//         $(this).on('click', function(){
//             prev_list($(this))
//         })
//     };  
//     $.fn.next_list = function() {
//         $(this).on('click', function(){
//             next_list($(this))
//         })
//     };  
//     function prev_list(a){
//         var index  = a.parent().parent().attr('index') - 1;
//         var item_visible  = a.parent().parent().attr('item');
//         console.log(item_visible)
//         if (index >= 0) {
//             a.parent().parent().attr('index' , index)
//             config_index(a, index)
//         }
//     } 
//     function next_list(a){
//         var index           = a.parent().parent().attr('index') - -1;
//         var count_item      = a.parent().parent().find('.carousel-column').length;
//         if (index < count_item) {
//             a.parent().parent().attr('index' , index)
//             config_index(a, index)
//             if (index >= 3) {
//                 console.log(a.parent())
//                 var move = (index - 2) * (a.parent().width() - a.parent().parent().attr('padding')*2) / a.parent().parent().attr('item') * -1;
//                 // console.log(a.parent().parent().find('.carousel-column').width() + a.parent().parent().attr('padding')*2)
//                 a.parent().parent().find('.carousel-row').css({
//                     'transform': 'translateX(' + move + 'px)'
//                 })
//             }
//         }
//     } 
//     function config_index(a,index ){
//         a.parent().parent().find('.carousel-column').removeClass('is-active')
//         a.parent().parent().find('.carousel-column').eq(index).addClass('is-active')
//     } 
// })( jQuery );

(function( $ ){
    $.fn.config = function(a) {
        var father          = $(this).parent().parent()
        var index           = father.attr('index')                          // vị trí hiện tại của đối tượng
        var padding         = a.padding                                     // padding giữa các đối tượng
        var margin          = - (a.padding)                                 // margin giữa 2 đầu thanh đối tượng
        var item_visible    = father.attr('item')                           // số lượng đối tượng hiển thị
        var item_percent    = 100 / item_visible                            // chiều rộng đối tượng theo %
        // var item_width      = father.width() / item_visible  - -padding/2    // chiều rộng đối tượng theo px
        var item_width      = (father.width() + padding*2) / item_visible    // chiều rộng đối tượng theo px
        var item_height     = father.find('.carousel-item').height();       // chiều cao đối tượng theo px
        var count_item      = father.find('.carousel-item').length;         // số lượng item
        var row_width       = item_width*count_item;                        // độ rộng của row
        console.log((father.width() + padding*2) / item_visible)
        $(this).parent().css({
            'height': item_height,
            // 'margin-left'   : margin + 'px',
            // 'margin-right'  : margin + 'px'
        })
        $(this).css({
            'height'        : item_height + 'px',
            'width'         : row_width + 'px',
            'margin-left'   : margin + 'px',
            'margin-right'  : margin + 'px'
        })
        $(this).find('.carousel-column').css({
            'width'         : item_width + 'px',
            'height'        : item_height + 'px',
            'padding-left'  : padding + 'px',
            'padding-right' : padding + 'px'
        })
        config_index($(this), index)
        // console.log($(this))
    };   
    $.fn.prev_list = function() {
        $(this).on('click', function(){
            prev_list($(this))
        })
    };  
    $.fn.next_list = function() {
        $(this).on('click', function(){
            next_list($(this))
        })
    };  
    $.fn.select_item = function() {
        $(this).on('click', function(){
            select_item($(this))
        })
    };  

    function prev_list(a){
        var index           = a.parent().parent().attr('index') - 1;
        var count_item      = a.parent().parent().find('.carousel-column').length;
        var item_visible    = a.parent().parent().attr('item');
        var width_item      = a.parent().parent().find('.carousel-column').width() -  -a.parent().parent().attr('padding')*2;
        if (index >= 0) {
            a.parent().parent().attr('index' , index)
            config_index(a, index)
            if (index > 1 && index < count_item-item_visible/2) {
                var move = (index - 2) * width_item * -1;
                a.parent().parent().find('.carousel-row').css({
                    'transform': 'translateX(' + move + 'px)'
                })
            }else if(index < 4){
                a.parent().parent().find('.carousel-row').css({
                    'transform': 'translateX(' + 0 + 'px)'
                })
            }
        }
    } 
    function next_list(a){
        var index           = a.parent().parent().attr('index') - -1;
        var count_item      = a.parent().parent().find('.carousel-column').length;
        var item_visible    = a.parent().parent().attr('item');
        var width_item      = a.parent().parent().find('.carousel-column').width() -  -a.parent().parent().attr('padding')*2;
        if (index < count_item) {
            a.parent().parent().attr('index' , index)
            config_index(a, index)
            if (index >= 3 && index < count_item-item_visible/2 + 1) {
                var move = (index - 2) * width_item * -1;
                a.parent().parent().find('.carousel-row').css({
                    'transform': 'translateX(' + move + 'px)'
                })
            }
        }
    } 
    function select_item(a){
        console.log( )
        config_index(a.parent(), a.index())
        a.parent().parent().parent().find('.carousel-image_preview').find('img').attr('src', a.find('img').attr('src'))
    }
    function config_index(a, index){
        a.parent().parent().find('.carousel-column').removeClass('is-active')
        a.parent().parent().find('.carousel-column').eq(index).addClass('is-active')
    } 
})( jQuery );


$('.carousel1').find('.carousel-row').config({
    padding: '20'
})
$('.carousel1').find('.carousel-prev').prev_list();
$('.carousel1').find('.carousel-next').next_list();
$('.carousel1').find('.carousel-column').select_item();


// $('.carousel2').find('.carousel-row').config({
//     padding: '20'
// })
// $('.carousel2').find('.carousel-prev').prev_list();
// $('.carousel2').find('.carousel-next').next_list();