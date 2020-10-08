$('.tab_action-item').on('click', function(){
	$(this).parent().find('.tab_action-item').removeClass('is-select')
	$(this).addClass('is-select')
})


