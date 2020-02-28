console.log($('.circle-text').val().split(""));
console.log($('.circle-text').attr('link'))

var array = $('.circle-text').val().split("");
var width = 100 / array.length;
var time = $('.circle-text').attr('time');
var link = $('.circle-text').attr('link');
var corner = $('.circle-text').attr('corner');
$('#'+link).append(function() {
    return '<div id="text-circle" style="animation: example infinite linear;animation-duration: '+time+'ms;">'+'</div>';
});
for (var i = 0; i < array.length; i++) {
    $('#text-circle').append(function() {
        return '<div id="text-circle" style="display: flex;justify-content: center;width: 10px; float: left; position: absolute; top: 0; left: 50%; transform: rotate('+corner*(i - Math.round(array.length/2)+1)+'deg);">'+ array[i] +'</div>';
    });
}











