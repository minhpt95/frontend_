$('.piano_white_button').on('mousedown', function(){
    $(this).addClass('is-click')
})
$('.piano_black_button').on('mousedown', function(){
    $(this).addClass('is-click')
})
$('.piano_white_button').on('mouseup', function(){
    $(this).removeClass('is-click')
})
$('.piano_black_button').on('mouseup', function(){
    $(this).removeClass('is-click')
})
$('.piano_white_button').on('mouseout', function(){
    $(this).removeClass('is-click')
})
$('.piano_black_button').on('mouseout', function(){
    $(this).removeClass('is-click')
})

















