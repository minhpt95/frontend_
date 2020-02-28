$('.toggle-button').find('input').css({ 'display': 'none' })
$('.toggle-button').find('.tg-btn').on('click', function() {
	console.log($(this).parent().attr('data-name'))
	$('.'+$(this).parent().attr('data-name')).toggleClass('active')
    // $(this).toggleClass('active')
})

$('.toggle-button').on('mouseenter', function() {
    if ($(this).find('.tg-btn').hasClass('active')) {
        $(this).find('.tg-btn').addClass('remove');
    } else {
        $(this).find('.tg-btn').addClass('select');
    }
})
$('.toggle-button').on('mouseleave', function() {
    $(this).find('.tg-btn').removeClass('remove');
    $(this).find('.tg-btn').removeClass('select');
})