$( document ).ready(function() {
	$('.list-convert').each(function(index){
		// đối tượng cha
		var father = $(this)
		// list các option
		var option = father.find('option')
		// vị trí selected
		var index_option = 0; 
		// độ dài list các option
		var length = father.find('option').length
		// lấy vị trí select
		setup_index();
		// tạo khung dữ liệu mẫu
		setup_HTML(index_option);
		// tạo biến input
		setupData();

		function setup_index(){
			option.each(function(optionIndex){
				if (option.eq(optionIndex).attr('selected')) {
					index_option = optionIndex;
				}
			})
		}
		function setup_HTML(index_option){
			var index = index_option
			// console.log(index_option)
			father.find('.list-item').append(
				'<div class="item not-active" id_item="'+ option.eq((index - 3) % length).attr('id_item') +'">'+
				'	<div class="title">'+
				 		option.eq((index - 3) % length).html()+
				'	</div>'+
				'</div>'+
				'<div class="item" id_item="'+ option.eq((index - 2) % length).attr('id_item') +'">'+
				'	<div class="title">'+
				 		option.eq((index - 2) % length).html()+
				'	</div>'+
				'</div>'+
				'<div class="item" id_item="'+ option.eq((index - 1) % length).attr('id_item') +'">'+
				'	<div class="title">'+
				 		option.eq((index - 1) % length).html()+
				'	</div>'+
				'</div>'+
				'<div class="item" id_item="'+ option.eq(index).attr('id_item') +'">'+
				'	<div class="title">'+
				 		option.eq(index).html()+
				'	</div>'+
				'</div>'+
				'<div class="item" id_item="'+ option.eq((index + 1) % length).attr('id_item') +'">'+
				'	<div class="title">'+
				 		option.eq((index + 1) % length).html()+
				'	</div>'+
				'</div>'+
				'<div class="item" id_item="'+ option.eq((index + 2) % length).attr('id_item') +'">'+
				'	<div class="title">'+
				 		option.eq((index + 2) % length).html()+
				'	</div>'+
				'</div>'+
				'<div class="item not-active" id_item="'+ option.eq((index + 3) % length).attr('id_item') +'">'+
				'	<div class="title">'+
				 		option.eq((index + 3) % length).html()+
				'	</div>'+
				'</div>'
			)
			father.find('.list-item').css({
				'top': -46 + 'px'
			})
			father.find('.item').eq(3).addClass('is-select')
		}
		var index = index_option;
		function prependData(index){
			father.find('.list-item').append(
				'<div class="item not-active" id_item="' + father.find('option').eq(index).attr('id_item') + '">'+
				'	<div class="title">'+
				 		father.find('option').eq(index).html()+
				'	</div>'+
				'</div>'
			)
		}
		function nextData(index){
			father.find('.list-item').prepend(
				'<div class="item not-active" id_item="' + father.find('option').eq(index).attr('id_item') + '">'+
				'	<div class="title">'+
				 		father.find('option').eq(index).html()+
				'	</div>'+
				'</div>'
			)
		}
		function setupData(){
			var data = father.find('.item').eq(3)
			father.find('.item_output').val(data.find('.title').html())
			father.find('.item_output').attr('id_item', data.attr('id_item'))
		}
		father.find('.next-control').on('click', function(){
			tmp = index - 2 // vị trí cuối của dãy
			tmp--;
			index--;
			father.find('.item').eq(6).remove()
			nextData(((tmp - 1) % length))
			father.find('.item').eq(1).toggleClass('not-active')
			father.find('.item').eq(6).toggleClass('not-active')
			father.find('.item').removeClass('is-select')
			father.find('.item').eq(3).addClass('is-select')
			setupData()
		})
		father.find('.prev-control').on('click', function(){
			tmp = index + 2 // vị trí cuối của dãy
			tmp++;
			index++;
			prependData((tmp+1) % length)
			father.find('.item').eq(1).toggleClass('not-active')
			father.find('.item').eq(0).remove()
			father.find('.item').eq(5).toggleClass('not-active')
			father.find('.item').removeClass('is-select')
			father.find('.item').eq(3).addClass('is-select')
			setupData()
		})
	})
	
});