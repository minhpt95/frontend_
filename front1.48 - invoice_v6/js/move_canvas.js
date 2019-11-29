function zoom(event) {
  	event.preventDefault();
  	// Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;

	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;

	// Chrome 1 - 71
	var isChromium = /chrome/i.test( navigator.userAgent );
	var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

	// Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS;


	var output = 'Detecting browsers by ducktyping:<hr>';
	output += 'isFirefox: ' + isFirefox + '<br>';
	output += 'isChrome: ' + isChrome + '<br>';
	output += 'isChromium: ' + isChromium + '<br>';
	output += 'isSafari: ' + isSafari + '<br>';
	output += 'isOpera: ' + isOpera + '<br>';
	output += 'isIE: ' + isIE + '<br>';
	output += 'isEdge: ' + isEdge + '<br>';
	output += 'isBlink: ' + isBlink + '<br>';
	console.log(output);

	if (isFirefox) {
		scale += event.deltaY * -0.05;
	}if (isChromium) {
		scale += event.deltaY * -0.001;
	}else{
		scale += event.deltaY * -0.001;
	}
  	
  	

  	scale = Math.min(Math.max(.125, scale), 8);
  	el.style.transform = 'scale(' + scale + ')';
	$('.zoom').css({"transform" : 'scale(' + scale + ')'});
	// insert anything if want zoooooooooooooooooom
	$('.zoom2').css({"transform" : 'scale(' + scale + ')'});
}
let scale = 1;
const el = document.getElementById('zoom');
el.onwheel = zoom;


var bool_zoom = false; 
var X2 = 0;
var Y2 = 0;
$("#zoom").mousedown(function(){
	var x = event.clientX;
	var y = event.clientY;
	var deltaX = X2;
	var deltaY = Y2;

	var deltaX2 = Xz2;
	var deltaY2 = Yz2;

	bool_zoom = true;
	$("#border_canvas").css('cursor', 'grabbing');
	$( "#border_canvas" ).mousemove(function(){
		if(bool_zoom){
			$( ".zoom" ).css({"top" : deltaY + event.clientY - y + "px", "left": deltaX +  event.clientX - x + "px"});
			Y2 = deltaY + event.clientY - y;
			X2 = deltaX + event.clientX - x;
			$("#border_canvas").css('cursor', 'grabbing');

			
			$( ".zoom2" ).css({"top" : deltaY2 + (event.clientY - y) + "px", "left": deltaX2 + (event.clientX - x) + "px"});
			Yz2 = deltaY2 + event.clientY - y;
			Xz2 = deltaX2 + event.clientX - x

		}
	});
});
$("#zoom").mouseup(function(){
	bool_zoom = false;
	$("#border_canvas").css('cursor', 'grab');
});

$( "#border_canvas" ).mouseout(function() {
	bool_zoom = false;
	$("#border_canvas").css('cursor', 'grab');
});

