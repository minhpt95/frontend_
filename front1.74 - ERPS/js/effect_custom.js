$('.active_nav').on('click', function(){
	$('nav').toggleClass('active');
	$('aside').toggleClass('active');
	$('.security').toggleClass('active');
	$('.logo').toggleClass('active');
	$('.content').toggleClass('active');

	if ($('nav').hasClass('active')) {
		$('[data-toggle=tooltip]').tooltip('enable')
	}else{
		$('[data-toggle=tooltip]').tooltip('disable')
	}
})
$('.itemmenu').on('click', function(){
	if ($(this).hasClass('is-selected')) {
		$(this).removeClass('is-selected')
	}else{
		$('.itemmenu').removeClass('is-selected')
		$(this).addClass('is-selected')
	}
})
var length_status_bar = $('.I-statusbar').find('.bar-value').length;
for (var i = 0; i < length_status_bar; i++) {
	$('.I-statusbar').find('.bar-value').eq(i).css({
		'width': $('.I-statusbar').find('.bar-value').eq(i).attr('value') + "%",
	})
}

var length_topmedia_bar = $('.I-topmedia').find('.top10').find('.bar-value').length;
for (var i = 0; i < length_topmedia_bar; i++) {
	$('.I-topmedia').find('.top10').find('.bar-value').eq(i).css({
		'height': $('.I-topmedia').find('.top10').find('.bar-value').eq(i).attr('value') + "%",
	})
}
var length_topmedia_bar = $('.I-topmedia').find('.top5').find('.bar-value').length;
for (var i = 0; i < length_topmedia_bar; i++) {
	$('.I-topmedia').find('.top5').find('.bar-value').eq(i).css({
		'width': $('.I-topmedia').find('.top5').find('.bar-value').eq(i).attr('value') + "%",
	})
}
$(document).ready(function(){
  	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle=tooltip]').tooltip('disable')
});



var config_doughnut = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				1,
				2,
				1
			],
			backgroundColor: ["#19D9B4", "#5598FF"],
			label: 'Thống Kê Đơn Hàng',
			weight: 3,
		}],
		labels: [
			'내부공유',
			'외부공유'
		]
	},
	options: {
		cutoutPercentage: 80,
	    legend: {
	        position: 'bottom',
			labels: {
			   	boxWidth: 15,
				padding: 50,
			},
	    },
		responsive: true
	}
};

window.onload = function() {
	var ctx = document.getElementById('doughnut-area').getContext('2d');
	window.myPie = new Chart(ctx, config_doughnut);
};















































